import { Injectable } from '@nestjs/common';
import { CreateSesionIniciadaDto } from './dto/create-sesion_iniciada.dto';
import { UpdateSesionIniciadaDto } from './dto/update-sesion_iniciada.dto';

@Injectable()
export class SesionIniciadaService {
  create(createSesionIniciadaDto: CreateSesionIniciadaDto) {
    return 'This action adds a new sesionIniciada';
  }

  findAll() {
    return `This action returns all sesionIniciada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesionIniciada`;
  }

  update(id: number, updateSesionIniciadaDto: UpdateSesionIniciadaDto) {
    return `This action updates a #${id} sesionIniciada`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesionIniciada`;
  }
}
