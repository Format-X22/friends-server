import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
    @IsOptional()
    @IsString()
    @Length(1, 64)
    @ApiProperty()
    firstName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 64)
    @ApiProperty()
    lastName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 2048)
    @ApiProperty()
    bio?: string;
}
