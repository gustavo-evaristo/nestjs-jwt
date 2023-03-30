import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body) {
    return this.authService.login(body.username);
  }
}
