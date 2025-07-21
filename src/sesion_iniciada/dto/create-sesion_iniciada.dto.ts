import { IsNotEmpty, IsString } from "class-validator";

export class CreateSesionIniciadaDto {
    @IsNotEmpty()
    @IsString()
    sesion_token: string;

    @IsNotEmpty()
    @IsString()
    expires_at: Date;

    @IsNotEmpty()
    @IsString()
    last_activity: Date;

    @IsNotEmpty()
    @IsString()
    id_user: string;
}
