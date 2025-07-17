import { Injectable } from '@nestjs/common';
import { CreateWorkflowAssignmentDto } from './dto/create-workflow-assignment.dto';
import { UpdateWorkflowAssignmentDto } from './dto/update-workflow-assignment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkflowAssignment } from './entities/workflow-assignment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkflowAssignmentService {

  constructor(@InjectRepository(WorkflowAssignment) private workflowAssignmentRepository: Repository<WorkflowAssignment>) {}

  create(createWorkflowAssignmentDto: CreateWorkflowAssignmentDto) {
    return 'This action adds a new workflowAssignment';
  }

  findAll() {
    return `This action returns all workflowAssignment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workflowAssignment`;
  }

  update(id: number, updateWorkflowAssignmentDto: UpdateWorkflowAssignmentDto) {
    return `This action updates a #${id} workflowAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} workflowAssignment`;
  }
}
