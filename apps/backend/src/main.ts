import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { appConfig } from './config/app.config';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableVersioning({ type: VersioningType.URI });

  app.setGlobalPrefix('api');

  const port = appConfig.port || 3000;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}/api`);
}

bootstrap();
