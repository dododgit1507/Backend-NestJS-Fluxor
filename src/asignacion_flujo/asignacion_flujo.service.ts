import { Injectable } from '@nestjs/common';
import { CreateAsignacionFlujoDto } from './dto/create-asignacion_flujo.dto';
import { UpdateAsignacionFlujoDto } from './dto/update-asignacion_flujo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionFlujo } from './entities/asignacion_flujo.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AsignacionFlujoService {
  constructor(
    @InjectRepository(AsignacionFlujo)
    private asignacionFlujoRepository: Repository<AsignacionFlujo>
  ) { }

  async create(createAsignacionFlujoDto: CreateAsignacionFlujoDto): Promise<AsignacionFlujo> {
    return this.asignacionFlujoRepository.save(createAsignacionFlujoDto);
  }

  async findAll(): Promise<AsignacionFlujo[]> {
    return this.asignacionFlujoRepository.find();
  }

  async findOne(id: string): Promise<AsignacionFlujo> {
    const asignacionFlujo = await this.asignacionFlujoRepository.findOne({ where: { id_asignacion_flujo: id } });
    if (!asignacionFlujo) {
      throw new NotFoundException(`AsignacionFlujo with id ${id} not found`);
    }
    return asignacionFlujo;
  }

  async update(id: string, updateAsignacionFlujoDto: UpdateAsignacionFlujoDto): Promise<AsignacionFlujo> {
    const asignacionFlujo = await this.findOne(id);
    await this.asignacionFlujoRepository.update(id, updateAsignacionFlujoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<AsignacionFlujo> {
    const asignacionFlujo = await this.findOne(id);
    await this.asignacionFlujoRepository.delete(id);
    return asignacionFlujo;
  }

  async findByUserId(userId: string): Promise<AsignacionFlujo[]> {
    return this.asignacionFlujoRepository.find({
      where: { id_user: userId },
      relations: ['user', 'flujo'] // Incluir las relaciones para obtener más información
    });
  }
}