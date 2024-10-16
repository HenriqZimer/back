import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS com múltiplas origens
  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Permitir ambas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite envio de cookies e autenticação, se necessário
  });

  await app.listen(3000);
}
bootstrap();
