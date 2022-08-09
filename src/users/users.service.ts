import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Serious',
      username: 'serious_black',
      password: 'why_so_serious',
    },
    {
      id: 2,
      name: 'Mumbo',
      username: 'mumbo',
      password: 'dumbo',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
