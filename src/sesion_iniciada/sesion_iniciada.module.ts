import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionIniciada } from './entities/sesion_iniciada.entity';
import { SesionIniciadaService } from './sesion_iniciada.service';
import { SesionIniciadaController } from './sesion_iniciada.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SesionIniciada])],
  controllers: [SesionIniciadaController],
  providers: [SesionIniciadaService],
  exports: [SesionIniciadaService]
})
export class SesionIniciadaModule {}
