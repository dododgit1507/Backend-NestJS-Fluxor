import { PartialType } from '@nestjs/mapped-types';
import { CreateSesionLimiteDto } from './create-sesion_limite.dto';

export class UpdateSesionLimiteDto extends PartialType(CreateSesionLimiteDto) {}
