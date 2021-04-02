import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pulse')
@ApiTags('pulse')
export class PulseController {
    @Get()
    @ApiQuery({ name: 'fromId', required: false })
    public async getList(@Query('fromId', ParseIntPipe) fromId: number) {
        return 'TODO getList';
    }
}
