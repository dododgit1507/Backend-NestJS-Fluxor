import { Injectable } from '@nestjs/common';
import { CreateSesionLimiteDto } from './dto/create-sesion_limite.dto';
import { UpdateSesionLimiteDto } from './dto/update-sesion_limite.dto';

@Injectable()
export class SesionLimiteService {
  create(createSesionLimiteDto: CreateSesionLimiteDto) {
    return 'This action adds a new sesionLimite';
  }

  findAll() {
    return `This action returns all sesionLimite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesionLimite`;
  }

  update(id: number, updateSesionLimiteDto: UpdateSesionLimiteDto) {
    return `This action updates a #${id} sesionLimite`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesionLimite`;
  }
}
