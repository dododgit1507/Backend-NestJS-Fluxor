import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserToken } from './entities/user_token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserTokenDto } from './dto/create-user_token.dto';
import { UpdateUserTokenDto } from './dto/update-user_token.dto';

@Injectable()
export class UserTokensService {
  constructor(
    @InjectRepository(UserToken)
    private tokenRepos: Repository<UserToken>,
  ) {}

  async create(createUserTokenDto: CreateUserTokenDto): Promise<UserToken> {
    const userToken = this.tokenRepos.create(createUserTokenDto);
    return await this.tokenRepos.save(userToken);
  }

  async findAll() {
    return await this.tokenRepos.find();
  }

  async findOne(id: number) {
    return this.tokenRepos.findOne({ where: { id_user_token: id.toString() } });
  }

  async update(id: number, UpdateUserTokenDto: UpdateUserTokenDto) {
    if (!UpdateUserTokenDto) {
      throw new Error('User update Token is required');
    }
    const usertoken = await this.findOne(id);
    if (!usertoken) {
      throw new Error('UserToken no encontrado');
    }
    // Update the user token with the new data
    return await this.tokenRepos.update(id, UpdateUserTokenDto);
  }

  //TODO PENDING IMPLEMENT LOGICAL DELETE
}
