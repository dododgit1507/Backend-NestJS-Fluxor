import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserTokensService } from './user_tokens.service';
import { CreateUserTokenDto } from './dto/create-user_token.dto';

@Controller('userTokens')
export class UserTokensController {
  constructor(private readonly userTokensService: UserTokensService) {}

  @Post()
  create(@Body() createUserTokenDto: CreateUserTokenDto) {
    return this.userTokensService.create(createUserTokenDto);
  }

  @Get()
  findAll() {
    return this.userTokensService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userTokensService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUserTokenDto: UpdateUserTokenDto,
  // ) {
  //   return this.userTokensService.update(+id, updateUserTokenDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userTokensService.remove(+id);
  // }
}
