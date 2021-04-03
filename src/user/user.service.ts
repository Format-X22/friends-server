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
    ) {}

    public async findOneByLogin(login: string) {
        console.log(await this.userRepository.find());
        console.log(await this.userRepository.findOne({ where: { login: 'test1' } }));

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

    public async updateOne(id, data) {
        await this.userRepository.update({ id }, data);
    }
}
