import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 5000);
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  await app.listen(5000, '0.0.0.0');
}
bootstrap();
