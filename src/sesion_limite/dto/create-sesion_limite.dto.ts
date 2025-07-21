import { IsNotEmpty, IsDate, IsString } from "class-validator";

export class CreateSesionLimiteDto {
    @IsNotEmpty()
    @IsDate()
    fecha_inicio: Date;

    @IsNotEmpty()
    @IsDate()
    fecha_limite: Date;

    @IsNotEmpty()
    @IsString()
    id_user: string;
}
