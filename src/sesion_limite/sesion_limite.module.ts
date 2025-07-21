import { Module } from '@nestjs/common';
import { SesionLimiteService } from './sesion_limite.service';
import { SesionLimiteController } from './sesion_limite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionLimite } from './entities/sesion_limite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SesionLimite])],
  controllers: [SesionLimiteController],
  providers: [SesionLimiteService],
  exports: [SesionLimiteService]
})
export class SesionLimiteModule {}
