import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { QuestModule } from './quest/quest.module';
import { PulseModule } from './pulse/pulse.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { PayModule } from './pay/pay.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersService } from './users/users.service';

@Module({
    imports: [
        ChatModule,
        QuestModule,
        PulseModule,
        RegistrationModule,
        AuthModule,
        PayModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
    exports: [UsersModule],
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
