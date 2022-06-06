import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule);
  await app.listen();
  console.log('Microservice Flights is listening');
}
bootstrap();
