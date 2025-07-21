import { PartialType } from '@nestjs/mapped-types';
import { CreateSesionIniciadaDto } from './create-sesion_iniciada.dto';

export class UpdateSesionIniciadaDto extends PartialType(CreateSesionIniciadaDto) {}
