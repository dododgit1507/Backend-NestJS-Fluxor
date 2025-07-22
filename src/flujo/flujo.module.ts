import { Module } from '@nestjs/common';
import { FlujoService } from './flujo.service';
import { FlujoController } from './flujo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flujo } from './entities/flujo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flujo])],
  controllers: [FlujoController],
  providers: [FlujoService],
  exports: [FlujoService]
})
export class FlujoModule { }
