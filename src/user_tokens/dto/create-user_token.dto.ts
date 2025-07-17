import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UUID } from 'crypto';

export class CreateUserTokenDto {
  @IsNotEmpty()
  @IsNumber()
  tokens_asigned: number;

  @IsNotEmpty()
  @IsNumber()
  tokens_used: number;

  @IsNotEmpty()
  @IsNumber()
  tokens_remaining: number;

  @IsNotEmpty()
  @IsString()
  id_user: UUID;

  @IsNotEmpty()
  @IsNumber()
  token_purchase: number;
}
