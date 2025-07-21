import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionLimiteService } from './sesion_limite.service';
import { CreateSesionLimiteDto } from './dto/create-sesion_limite.dto';
import { UpdateSesionLimiteDto } from './dto/update-sesion_limite.dto';

@Controller('sesion-limite')
export class SesionLimiteController {
  constructor(private readonly sesionLimiteService: SesionLimiteService) {}

  @Post()
  create(@Body() createSesionLimiteDto: CreateSesionLimiteDto) {
    return this.sesionLimiteService.create(createSesionLimiteDto);
  }

  @Get()
  findAll() {
    return this.sesionLimiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionLimiteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSesionLimiteDto: UpdateSesionLimiteDto) {
    return this.sesionLimiteService.update(+id, updateSesionLimiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionLimiteService.remove(+id);
  }
}
