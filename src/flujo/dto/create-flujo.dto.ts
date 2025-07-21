import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";

export class CreateFlujoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsBoolean()
    estado: boolean;
}
