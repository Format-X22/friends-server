import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Connection, Repository } from 'typeorm';
import { RegistrationDto } from '../registration/registration.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private connection: Connection,
    ) {}

    public async findOneByLogin(login: string) {
        return this.usersRepository.findOne({
            where: { login },
        });
    }

    public async register(data: RegistrationDto) {
        const user = new Users();

        user.login = data.login;
        user.password = data.password;

        await this.usersRepository.save(user);
    }
}
