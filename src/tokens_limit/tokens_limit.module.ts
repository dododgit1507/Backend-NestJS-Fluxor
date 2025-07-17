import { Module } from '@nestjs/common';
import { TokensLimitService } from './tokens_limit.service';
import { TokensLimitController } from './tokens_limit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensLimit } from './entities/tokens_limit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TokensLimit])],
  controllers: [TokensLimitController],
  providers: [TokensLimitService],
  exports: [TokensLimitService],
})
export class TokensLimitModule {}
