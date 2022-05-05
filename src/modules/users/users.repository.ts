import { Repository, EntityRepository } from 'typeorm';
import { GetUsersFilterDto } from './get-users-filter';
import { Users } from './users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  async getUsers(getUsersFilterDto: GetUsersFilterDto): Promise<Users[]> {
    const { name } = getUsersFilterDto;

    const query = this.createQueryBuilder('user')
      .select(['id', 'name', 'email'])
      .where('user.deleted_at IS NULL')
      .orderBy('user.name', 'ASC');

    if (name) {
      query.andWhere('LOWER(user.name) LIKE LOWER(:name)', {
        name: `%${name}%`,
      });
    }

    return await query.getRawMany();
  }
}
