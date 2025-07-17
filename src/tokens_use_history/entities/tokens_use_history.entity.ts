import { User } from 'src/users/entities/user.entity';
import { WorkflowAssignment } from 'src/workflow-assignment/entities/workflow-assignment.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TokensUseHistory {
  @PrimaryGeneratedColumn('uuid')
  id_history_token_use: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  userTokensHistory: User;

  @Column('int')
  tokens_used: number;

  @Column('int')
  tokens_before: number;

  @Column('int')
  tokens_after: number;


  @ManyToOne(() => WorkflowAssignment, { onDelete: 'CASCADE' })
  workflowAssignment: WorkflowAssignment;
}
