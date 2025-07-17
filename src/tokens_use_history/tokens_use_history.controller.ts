import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TokensUseHistoryService } from './tokens_use_history.service';
import { CreateTokensUseHistoryDto } from './dto/create-tokens_use_history.dto';
import { UpdateTokensUseHistoryDto } from './dto/update-tokens_use_history.dto';

@Controller('tokensUseHistory')
export class TokensUseHistoryController {
  constructor(
    private readonly tokensUseHistoryService: TokensUseHistoryService,
  ) {}

  @Post()
  create(@Body() createTokensUseHistoryDto: CreateTokensUseHistoryDto) {
    return this.tokensUseHistoryService.create(createTokensUseHistoryDto);
  }

  @Get()
  findAll() {
    return this.tokensUseHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokensUseHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTokensUseHistoryDto: UpdateTokensUseHistoryDto,
  ) {
    return this.tokensUseHistoryService.update(+id, updateTokensUseHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokensUseHistoryService.remove(+id);
  }
}
