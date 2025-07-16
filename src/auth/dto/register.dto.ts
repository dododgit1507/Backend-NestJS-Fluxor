import { IsNotEmpty, IsString, IsEmail, IsBoolean, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
