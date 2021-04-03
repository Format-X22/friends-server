import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Connection, Repository } from 'typeorm';
import { RegistrationDto } from '../registration/registration.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private connection: Connection,
    ) {}

    public async findOneByLogin(login: string) {
        return this.userRepository.findOne({
            where: { login },
        });
    }

    public async register(data: RegistrationDto) {
        const user = new User();

        user.login = data.login;
        user.password = data.password;

        await this.userRepository.save(user);
    }
}
