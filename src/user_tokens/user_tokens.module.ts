import { Module } from '@nestjs/common';
import { UserTokensService } from './user_tokens.service';
import { UserTokensController } from './user_tokens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToken } from './entities/user_token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserToken])],
  controllers: [UserTokensController],
  providers: [UserTokensService],
  exports: [UserTokensService],
})
export class UserTokensModule {}
