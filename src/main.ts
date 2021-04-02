import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app: NestApplication = await NestFactory.create(AppModule);
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Api')
        .setDescription('Full api docs')
        .setVersion('1.0')
        .build();
    const documentation = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api', app, documentation);

    await app.listen(3000);
}
bootstrap().catch((error) => console.error('FATAL ERROR', error));
