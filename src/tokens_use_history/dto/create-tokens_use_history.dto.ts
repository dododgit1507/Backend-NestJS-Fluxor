import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTokensUseHistoryDto {
  @IsNotEmpty()
  @IsNumber()
  token_used: number;

  @IsOptional()
  @IsNumber()
  id_user: string;

  @IsNotEmpty()
  @IsNumber()
  tokens_before: number;

  @IsNotEmpty()
  @IsNumber()
  tokens_after: number;
}
