import { PartialType } from '@nestjs/mapped-types';
import { CreateTokensLimitDto } from './create-tokens_limit.dto';

export class UpdateTokensLimitDto extends PartialType(CreateTokensLimitDto) {}
