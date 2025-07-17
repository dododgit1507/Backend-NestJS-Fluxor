import { WorkflowAssignment } from 'src/workflow-assignment/entities/workflow-assignment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workflow {
  @PrimaryGeneratedColumn('uuid')
  id_workflow: string;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 80 })
  path_endpoint: string;

  @Column('boolean', { default: true })
  isActive: boolean;

  @OneToMany(() => WorkflowAssignment, (x) => x.workflows)
  workflows: WorkflowAssignment[];
}
