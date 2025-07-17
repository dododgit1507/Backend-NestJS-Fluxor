import { Injectable } from '@nestjs/common';
import { CreateTokensLimitDto } from './dto/create-tokens_limit.dto';
import { UpdateTokensLimitDto } from './dto/update-tokens_limit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TokensLimit } from './entities/tokens_limit.entity';
import { Repository } from 'typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class TokensLimitService {
  constructor(
    @InjectRepository(TokensLimit)
    private tokensLimitRepository: Repository<TokensLimit>,
  ) {}

  async create(createTokensLimitDto: CreateTokensLimitDto) {
    return await this.tokensLimitRepository.save(createTokensLimitDto);
  }

  async findAll() {
    return await this.tokensLimitRepository.find();
  }

  async findOne(id: number) {
    return await this.tokensLimitRepository.findOne({ where: { id_tokens_limit: id.toString() } });
  }

  async update(id: number, updateTokensLimitDto: UpdateTokensLimitDto) {
    const tokensLimit = await this.tokensLimitRepository.findOne({ where: { id_tokens_limit: id.toString() } });
    if (!updateTokensLimitDto && !tokensLimit) {
      return throwError(() => new Error('Entity Token not found or DTO limit is empty'));
    }

    return await this.tokensLimitRepository.update(id.toString(), updateTokensLimitDto);
  }

  async remove(id: number) {
    await this.tokensLimitRepository.delete({ id_tokens_limit: id.toString() });
    return { deleted: true };
  }
}
