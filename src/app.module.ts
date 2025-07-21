import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SesionIniciadaModule } from './sesion_iniciada/sesion_iniciada.module';
import { SesionLimiteModule } from './sesion_limite/sesion_limite.module';
import { AsignacionFlujoModule } from './asignacion_flujo/asignacion_flujo.module';
import { FlujoModule } from './flujo/flujo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // only for development
    }),
    UsersModule,
    AuthModule,
    SesionIniciadaModule,
    SesionLimiteModule,
    AsignacionFlujoModule,
    FlujoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }