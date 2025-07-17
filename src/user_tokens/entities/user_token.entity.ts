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
export class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id_user_token: string;

  @Column('int')
  tokens_asigned: number;

  @Column('int')
  tokens_used: number;

  @Column('int')
  tokens_remaining: number;

  @Column('uuid')
  @JoinColumn({ name: 'id_user' })
  id_user: string;

  @Column('int')
  token_purchase: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  date_last_reboot: Date;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_user' })
  user: User;
}
