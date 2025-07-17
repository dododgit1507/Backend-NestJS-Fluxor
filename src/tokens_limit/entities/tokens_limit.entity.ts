import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TokensLimit {
  @PrimaryGeneratedColumn('uuid')
  id_tokens_limit: string;

  @Column('int')
  limit_monthly: number;

  @Column('int')
  cost_per_token: number;

  @Column('bool')
  auto_refill: boolean;

  @Column('int')
  refill_amount: number;

  @Column('int')
  umbrall_advertising_tokens: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_user' })
  tokenLimitUser: User;
}
