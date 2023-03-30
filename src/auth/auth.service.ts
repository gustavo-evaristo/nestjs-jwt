import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(username: string) {
    const user = await this.userService.findByUsername(username);

    if (!user) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
    };

    const token = this.jwtService.sign(payload);

    return { token };
  }
}
