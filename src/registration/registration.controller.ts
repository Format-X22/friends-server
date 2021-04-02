import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegistrationDto } from './registration.dto';

@Controller('registration')
@ApiTags('registration')
export class RegistrationController {
    @Post()
    public async make(@Body() body: RegistrationDto) {
        return 'TODO make';
    }
}
