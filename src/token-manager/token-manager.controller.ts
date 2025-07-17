import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenManagerService } from './token-manager.service';
import { CreateTokenManagerDto } from './dto/create-token-manager.dto';
import { UpdateTokenManagerDto } from './dto/update-token-manager.dto';

@Controller('token-manager')
export class TokenManagerController {
  constructor(private readonly tokenManagerService: TokenManagerService) {}

  @Post()
  create(@Body() createTokenManagerDto: CreateTokenManagerDto) {
    return this.tokenManagerService.create(createTokenManagerDto);
  }

  @Get()
  findAll() {
    return this.tokenManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokenManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenManagerDto: UpdateTokenManagerDto) {
    return this.tokenManagerService.update(+id, updateTokenManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenManagerService.remove(+id);
  }
}
