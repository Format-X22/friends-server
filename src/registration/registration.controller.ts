import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegistrationDto } from './registration.dto';
import { UsersService } from '../users/users.service';
import { Public } from '../auth.decorator';

@Controller('registration')
@ApiTags('registration')
export class RegistrationController {
    constructor(private usersService: UsersService) {}

    @Post()
    @Public()
    public async make(@Body() body: RegistrationDto) {
        try {
            await this.usersService.register(body);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException();
            } else {
                throw error;
            }
        }
    }
}
