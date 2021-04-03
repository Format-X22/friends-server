import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { UsersModule } from '../users/users.module';

@Module({
    controllers: [RegistrationController],
    imports: [UsersModule],
})
export class RegistrationModule {}
