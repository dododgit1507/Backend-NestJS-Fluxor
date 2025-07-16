import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // console.log('ENV JWT_SECRET:', process.env.JWT_SECRET);
  // console.log('ENV JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);
  // console.log('ENV DB_HOST:', process.env.DB_HOST);

  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Enable cors
  // Debo cambiar en produccion y permitir solo origenes validos

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties that are not in the dto
    forbidNonWhitelisted: true, // Return error if there are properties that are not in the dto
    transform: true, // Transform the data to the type of the dto
  }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();