import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { UserModule } from '../user/user.module';

@Module({
    controllers: [RegistrationController],
    imports: [UserModule],
})
export class RegistrationModule {}
