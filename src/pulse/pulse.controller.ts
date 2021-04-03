import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pulse')
@ApiTags('pulse')
@ApiBearerAuth()
export class PulseController {
    @Get()
    @ApiQuery({ name: 'fromId' })
    public async getList(@Query('fromId', ParseIntPipe) fromId: number) {
        return 'TODO getList';
    }
}
