import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ user_id });
    if (!user) {
      throw new NotFoundException(`User ${user_id} not found`);
    }
    return user;
  }

  async update(user_id: number, userData: Partial<User>): Promise<User> {
    await this.findOne(user_id);
    await this.userRepository.update(user_id, userData);
    return this.findOne(user_id);
  }

  async remove(user_id: number): Promise<void> {
    const user = await this.findOne(user_id);
    await this.userRepository.remove(user);
  }
}
