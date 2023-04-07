import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger';
import { ErrorHandler } from './filter/custom.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({ credentials: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ErrorHandler());

  const config = app.get(ConfigService);
  const port = config.getOrThrow('app.port');
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
