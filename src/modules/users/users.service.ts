import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUsersFilterDto } from './get-users-filter';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
  ) {}

  getUsers(getUsersFilterDto: GetUsersFilterDto): Promise<Users[]> {
    return this.userRepository.getUsers(getUsersFilterDto);
  }
}
