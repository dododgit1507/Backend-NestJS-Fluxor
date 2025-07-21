import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionFlujoDto } from './create-asignacion_flujo.dto';

export class UpdateAsignacionFlujoDto extends PartialType(CreateAsignacionFlujoDto) {}
