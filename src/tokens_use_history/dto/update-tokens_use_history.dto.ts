import { PartialType } from '@nestjs/mapped-types';
import { CreateTokensUseHistoryDto } from './create-tokens_use_history.dto';

export class UpdateTokensUseHistoryDto extends PartialType(CreateTokensUseHistoryDto) {}
