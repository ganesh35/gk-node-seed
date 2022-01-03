import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');


  const config = new DocumentBuilder()
    .setTitle('Node Seed Swagger example')
    .setDescription('Seed application and CRUD example')
    .setVersion('1.0.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);


  await app.listen(port);
  console.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
