import { TokensLimit } from 'src/tokens_limit/entities/tokens_limit.entity';
import { UserToken } from 'src/user_tokens/entities/user_token.entity';
import { WorkflowAssignment } from 'src/workflow-assignment/entities/workflow-assignment.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 100, unique: true })
  email: string;

  @Column('varchar', { length: 60 })
  password: string;

  @Column('varchar', { length: 8 })
  dni: string;

  @Column('varchar', { length: 9 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserToken, (userToken) => userToken.user)
  userTokens: UserToken;

  @OneToMany(
    () => WorkflowAssignment,
    (workflowAssignment) => workflowAssignment.user,
  )
  workflowAssignments: WorkflowAssignment[];

  @OneToOne(() => TokensLimit, (tokensLimit) => tokensLimit.tokenLimitUser)
  tokensLimit: TokensLimit;
}
