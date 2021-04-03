import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegistrationDto } from './registration.dto';
import { UserService } from '../user/user.service';
import { Public } from '../auth.decorator';

@Controller('registration')
@ApiTags('registration')
export class RegistrationController {
    constructor(private userService: UserService) {}

    @Post()
    @Public()
    public async make(@Body() body: RegistrationDto) {
        try {
            await this.userService.register(body);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException();
            } else {
                throw error;
            }
        }
    }
}
