import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OptionsDto } from './options.dto';

@Controller('options')
@ApiTags('options')
export class OptionsController {
    @Get()
    public async get() {
        return 'TODO get';
    }

    @Put()
    public async update(@Body() body: OptionsDto) {
        return 'TODO update';
    }
}
