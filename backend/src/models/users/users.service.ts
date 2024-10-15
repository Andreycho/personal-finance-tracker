import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity as User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(data: number | any): Promise<User | undefined> {
    if (typeof data === 'number') {
      return await this.usersRepository.findOne({ where: { id: data } });
    } else {
      return await this.usersRepository.findOne({ where: data });
    }
  }

  async create(data): Promise<User | undefined> {
    try {
      const user = await this.usersRepository.save(data);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Could not create user');
    }
  }
}
