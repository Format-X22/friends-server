import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OptionsDto {
    @IsOptional()
    @IsString()
    @Length(2, 100)
    @ApiProperty()
    name: string;

    @IsOptional()
    @IsString()
    @Length(1, 2000)
    @ApiProperty()
    bio: string;
}
