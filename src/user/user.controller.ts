import { Controller, Get, Put, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
    @Get()
    public async get(@Request() req) {
        return req.user;
    }

    @Put()
    public async update() {
        return 'TODO update';
    }
}
