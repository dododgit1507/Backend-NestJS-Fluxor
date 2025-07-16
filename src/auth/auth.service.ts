import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {

        const existingUser = await this.usersService.findByEmail(registerDto.email);
        if (existingUser) {
            throw new UnauthorizedException('User already exists');
        }

        // Crear al usuario
        const user = await this.usersService.create(registerDto);

        // Generar el token
        const payload = { email: user.email, sub: user.id_user };
        const token = this.jwtService.sign(payload);

        // Retornar el usuario sin el password y token
        const { password, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            access_token: token
        }
    }

    async login(loginDto: LoginDto) {
        // Buscar usuario por email
        const user = await this.usersService.findByEmail(loginDto.email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Verificar contraseña
        const isPasswordValid = await this.usersService.validatePassword(
            loginDto.password,
            user.password,
        );
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Generar token
        const payload = { email: user.email, sub: user.id_user };
        const token = this.jwtService.sign(payload);

        // Retornar usuario sin contraseña y token
        const { password, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            access_token: token,
        };
    }

    async validateUser(payload: any) {
        return await this.usersService.findById(payload.sub);
    }
}
