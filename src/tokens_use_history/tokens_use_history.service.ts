import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTokensUseHistoryDto } from './dto/create-tokens_use_history.dto';
import { UpdateTokensUseHistoryDto } from './dto/update-tokens_use_history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TokensUseHistory } from './entities/tokens_use_history.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class TokensUseHistoryService {
  constructor(
    @InjectRepository(TokensUseHistory)
    private tokensUseHistoryRepository: Repository<TokensUseHistory>,
    private UsersService: UsersService,
  ) {}

  async create(
    createTokensUseHistoryDto: CreateTokensUseHistoryDto,
  ): Promise<TokensUseHistory> {
    return await this.tokensUseHistoryRepository.save(
      createTokensUseHistoryDto,
    );
  }

  async findAll() {
    return await this.tokensUseHistoryRepository.find();
  }

  async findOne(id: number): Promise<TokensUseHistory | null> {
    return await this.tokensUseHistoryRepository.findOne({
      where: { id_history_token_use: id.toString() },
    });
  }

  async update(
    id: number,
    updateTokensUseHistoryDto: UpdateTokensUseHistoryDto,
  ): Promise<TokensUseHistory> {
    const tokenHistory = await this.findOne(id);
    if (!tokenHistory) {
      throw new NotFoundException(`TokensUseHistory not found with id: ${id}`);
    }

    //validacion por id-usuario
    if (!updateTokensUseHistoryDto.id_user) {
      throw new NotFoundException(
        'id_user is required for updating token history',
      );
    }

    const user = await this.UsersService.findById(
      updateTokensUseHistoryDto.id_user,
    );

    //validacion si encuentra el usuario
    if (!user) {
      throw new NotFoundException(
        `User not found with id: ${updateTokensUseHistoryDto.id_user}`,
      );
    }
    tokenHistory.tokens_after =
      updateTokensUseHistoryDto.tokens_after ?? tokenHistory.tokens_after;
    tokenHistory.tokens_before =
      updateTokensUseHistoryDto.tokens_before ?? tokenHistory.tokens_before;
    tokenHistory.userTokensHistory = user;
    return await this.tokensUseHistoryRepository.save(tokenHistory);
  }

  // TODO PENDING LOGICAL DELETE ?
  // remove(id: number) {
  //   return `This action removes a #${id} tokensUseHistory`;
  // }
}
