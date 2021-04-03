import { Controller, Get, Put, UseGuards, Request, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserUpdateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    public async get(@Request() req) {
        return req.user;
    }

    @Put()
    public async update(@Request() req, @Body() body: UserUpdateDto) {
        await this.userService.updateOne(req.user.id, body);
    }
}
