import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionIniciadaService } from './sesion_iniciada.service';
import { CreateSesionIniciadaDto } from './dto/create-sesion_iniciada.dto';
import { UpdateSesionIniciadaDto } from './dto/update-sesion_iniciada.dto';

@Controller('sesion-iniciada')
export class SesionIniciadaController {
  constructor(private readonly sesionIniciadaService: SesionIniciadaService) {}

  @Post()
  create(@Body() createSesionIniciadaDto: CreateSesionIniciadaDto) {
    return this.sesionIniciadaService.create(createSesionIniciadaDto);
  }

  @Get()
  findAll() {
    return this.sesionIniciadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionIniciadaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSesionIniciadaDto: UpdateSesionIniciadaDto) {
    return this.sesionIniciadaService.update(+id, updateSesionIniciadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionIniciadaService.remove(+id);
  }
}
