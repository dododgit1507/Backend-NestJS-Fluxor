import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlujoDto } from './dto/create-flujo.dto';
import { UpdateFlujoDto } from './dto/update-flujo.dto';
import { Flujo } from './entities/flujo.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class FlujoService {
  constructor(
    @InjectRepository(Flujo)
    private flujoRepository: Repository<Flujo>,
  ) { }

  async create(createFlujoDto: CreateFlujoDto): Promise<Flujo> {
    return this.flujoRepository.save(createFlujoDto);
  }

  async findAll(): Promise<Flujo[]> {
    return this.flujoRepository.find();
  }

  async findOne(id: string): Promise<Flujo> {
    const flujo = await this.flujoRepository.findOne({ where: { id_flujo: id } });
    if (!flujo) {
      throw new NotFoundException(`Flujo with id ${id} not found`);
    }
    return flujo;
  }

  async update(id: string, updateFlujoDto: UpdateFlujoDto): Promise<Flujo> {
    const flujo = await this.findOne(id);
    await this.flujoRepository.update(id, updateFlujoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<{ message: string }> {
    const flujo = await this.findOne(id); // Lanzará el NotFoundException si no se encuentra el producto
    await this.flujoRepository.delete(id);
    return { message: `Flujo with id ${id} has been removed` };
  }
}