
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const payload = { email };
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken,
        };
    }
}