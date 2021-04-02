import { Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('chat')
@ApiTags('chat')
export class ChatController {
    @Get()
    @ApiQuery({ name: 'room' })
    @ApiQuery({ name: 'fromId', required: false })
    public async getList(
        @Query('room', ParseIntPipe) room: number,
        @Query('fromId', ParseIntPipe) fromId: number,
    ) {
        return 'TODO getList';
    }

    @Post()
    @ApiQuery({ name: 'room' })
    public async add(@Query('room', ParseIntPipe) room: number) {
        return 'TODO add';
    }

    @Get('rooms')
    public async getRooms() {
        return 'TODO getRooms';
    }
}
