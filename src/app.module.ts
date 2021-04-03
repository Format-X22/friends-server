import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { QuestModule } from './quest/quest.module';
import { PulseModule } from './pulse/pulse.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { PayModule } from './pay/pay.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    imports: [
        ChatModule,
        QuestModule,
        PulseModule,
        RegistrationModule,
        AuthModule,
        PayModule,
        UserModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
    exports: [UserModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
