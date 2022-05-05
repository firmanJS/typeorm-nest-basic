import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Query,
  Res,
  Version,
} from '@nestjs/common';
import lang from '../../lang/config.lang';
import { GetUsersFilterDto } from './get-users-filter';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Version('1')
  @Get()
  async store(
    @Query() getUsersFilterDto: GetUsersFilterDto,
    @Res() response,
  ): Promise<any> {
    try {
      const users = await this.usersService.getUsers(getUsersFilterDto);

      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: lang.__('get.success'),
        data: users,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Version('1')
  @Get()
  async fetch(
    @Query() getUsersFilterDto: GetUsersFilterDto,
    @Res() response,
  ): Promise<any> {
    try {
      const users = await this.usersService.getUsers(getUsersFilterDto);

      return response.status(HttpStatus.OK).send({
        statusCode: HttpStatus.OK,
        message: lang.__('get.success'),
        data: users,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
