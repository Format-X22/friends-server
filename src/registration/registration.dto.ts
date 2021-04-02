import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
    @IsNotEmpty()
    @IsString()
    @Length(2, 100)
    @ApiProperty()
    login: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 100)
    @ApiProperty()
    password: string;
}
