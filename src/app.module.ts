import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { QuestModule } from './quest/quest.module';
import { OptionsModule } from './options/options.module';
import { PulseModule } from './pulse/pulse.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { PayModule } from './pay/pay.module';

@Module({
    imports: [
        ChatModule,
        QuestModule,
        OptionsModule,
        PulseModule,
        RegistrationModule,
        AuthModule,
        PayModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
