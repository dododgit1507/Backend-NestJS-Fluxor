import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionFlujoService } from './asignacion_flujo.service';
import { CreateAsignacionFlujoDto } from './dto/create-asignacion_flujo.dto';
import { UpdateAsignacionFlujoDto } from './dto/update-asignacion_flujo.dto';

@Controller('asignacion-flujo')
export class AsignacionFlujoController {
  constructor(private readonly asignacionFlujoService: AsignacionFlujoService) {}

  @Post()
  create(@Body() createAsignacionFlujoDto: CreateAsignacionFlujoDto) {
    return this.asignacionFlujoService.create(createAsignacionFlujoDto);
  }

  @Get()
  findAll() {
    return this.asignacionFlujoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignacionFlujoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignacionFlujoDto: UpdateAsignacionFlujoDto) {
    return this.asignacionFlujoService.update(+id, updateAsignacionFlujoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignacionFlujoService.remove(+id);
  }
}
