import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(login: string, password: string) {
        const user = await this.userService.findOneByLogin(login);

        if (user && user.password === password) {
            const { password, ...result } = user;

            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.login, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
