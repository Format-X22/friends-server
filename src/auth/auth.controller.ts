import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../auth.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiQuery({ name: 'login', type: 'string' })
    @ApiQuery({ name: 'password', type: 'string' })
    @Public()
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
