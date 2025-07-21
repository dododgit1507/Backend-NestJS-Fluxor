import { Injectable } from '@nestjs/common';
import { CreateAsignacionFlujoDto } from './dto/create-asignacion_flujo.dto';
import { UpdateAsignacionFlujoDto } from './dto/update-asignacion_flujo.dto';

@Injectable()
export class AsignacionFlujoService {
  create(createAsignacionFlujoDto: CreateAsignacionFlujoDto) {
    return 'This action adds a new asignacionFlujo';
  }

  findAll() {
    return `This action returns all asignacionFlujo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacionFlujo`;
  }

  update(id: number, updateAsignacionFlujoDto: UpdateAsignacionFlujoDto) {
    return `This action updates a #${id} asignacionFlujo`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacionFlujo`;
  }
}
