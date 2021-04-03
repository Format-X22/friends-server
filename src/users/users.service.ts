import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            login: 'test1',
            password: 'test1p',
        },
        {
            id: 2,
            login: 'test2',
            password: 'test2p',
        },
    ];

    public async findOne(login: string) {
        return this.users.find(user => user.login === login);
    }
}
