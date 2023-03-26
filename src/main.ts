import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      const error = validationErrors[0]
      const keys = Object.keys(error.constraints)

      return new BadRequestException({
        status: "Bad Request",
        message: error.constraints[keys[0]],
        data: {}
      });
    },
  }));
  await app.listen(
    process.env.PORT || 3030, 
    process.env.HOST || "localhost",
    (err, address) => {
      console.log(err)
    }
    );
}
bootstrap();
