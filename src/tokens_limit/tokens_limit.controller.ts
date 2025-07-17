import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokensLimitService } from './tokens_limit.service';
import { CreateTokensLimitDto } from './dto/create-tokens_limit.dto';
import { UpdateTokensLimitDto } from './dto/update-tokens_limit.dto';

@Controller('tokens-limit')
export class TokensLimitController {
  constructor(private readonly tokensLimitService: TokensLimitService) {}

  @Post()
  create(@Body() createTokensLimitDto: CreateTokensLimitDto) {
    return this.tokensLimitService.create(createTokensLimitDto);
  }

  @Get()
  findAll() {
    return this.tokensLimitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokensLimitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokensLimitDto: UpdateTokensLimitDto) {
    return this.tokensLimitService.update(+id, updateTokensLimitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokensLimitService.remove(+id);
  }
}
