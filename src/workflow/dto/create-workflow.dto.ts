import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkflowDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  path_endpoint: string;
}
