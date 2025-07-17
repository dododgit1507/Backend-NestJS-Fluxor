import { Module } from '@nestjs/common';
import { TokensUseHistoryService } from './tokens_use_history.service';
import { TokensUseHistoryController } from './tokens_use_history.controller';
import { TokensUseHistory } from './entities/tokens_use_history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TokensUseHistory])],
  controllers: [TokensUseHistoryController],
  providers: [TokensUseHistoryService],
  exports: [TokensUseHistoryService],
})
export class TokensUseHistoryModule {}
