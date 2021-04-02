import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app: NestApplication = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Api')
        .setDescription('Full api docs. Yes, it`s open.')
        .setVersion('1.0')
        .build();
    const documentation = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api', app, documentation);

    await app.listen(3000);
}
bootstrap().catch((error) => console.error('FATAL ERROR', error));
