import { Module } from '@nestjs/common';
import { TokenManagerService } from './token-manager.service';
import { TokenManagerController } from './token-manager.controller';

@Module({
  controllers: [TokenManagerController],
  providers: [TokenManagerService],
})
export class TokenManagerModule {}
