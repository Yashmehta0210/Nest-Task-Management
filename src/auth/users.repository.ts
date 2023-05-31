import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async CreateUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return;
  }
}
