import { User } from 'src/users/entities/user.entity';
import { Workflow } from 'src/workflow/entities/workflow.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class WorkflowAssignment {
  @PrimaryGeneratedColumn('uuid')
  id_workflow_assignment: string;

  @ManyToOne(() => Workflow, { onDelete: 'CASCADE' })
  workflows: Workflow;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;
}
