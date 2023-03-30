import { Injectable } from '@nestjs/common';
import { users } from './users';

@Injectable()
export class UserService {
  async findById(id: string) {
    return users.find((user) => user.id === id);
  }

  async findByUsername(username: string) {
    return users.find((user) => user.username === username);
  }
}
