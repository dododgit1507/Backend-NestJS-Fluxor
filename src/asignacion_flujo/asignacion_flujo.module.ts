import { Module } from '@nestjs/common';
import { AsignacionFlujoService } from './asignacion_flujo.service';
import { AsignacionFlujoController } from './asignacion_flujo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionFlujo } from './entities/asignacion_flujo.entity';

@Module({
  controllers: [AsignacionFlujoController],
  providers: [AsignacionFlujoService],
  imports: [TypeOrmModule.forFeature([AsignacionFlujo])],
  exports: [AsignacionFlujoService]
})
export class AsignacionFlujoModule {}
