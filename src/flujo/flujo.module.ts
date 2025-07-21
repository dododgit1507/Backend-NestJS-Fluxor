import { Module } from '@nestjs/common';
import { FlujoService } from './flujo.service';
import { FlujoController } from './flujo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flujo } from './entities/flujo.entity';

@Module({
  controllers: [FlujoController],
  providers: [FlujoService],
  imports: [TypeOrmModule.forFeature([Flujo])],
  exports: [FlujoService]
})
export class FlujoModule { }
