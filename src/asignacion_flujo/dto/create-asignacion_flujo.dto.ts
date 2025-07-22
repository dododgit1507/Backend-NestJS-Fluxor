import { IsNotEmpty } from "class-validator";

export class CreateAsignacionFlujoDto {
    @IsNotEmpty()
    id_flujo: string;

    @IsNotEmpty()
    id_user: string;
}