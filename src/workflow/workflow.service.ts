import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workflow } from './entities/workflow.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkflowService {
  constructor(
    @InjectRepository(Workflow)
    private workflowRepository: Repository<Workflow>,
  ) {}

  async create(createWorkflowDto: CreateWorkflowDto): Promise<Workflow> {
    return await this.workflowRepository.save(createWorkflowDto);
  }

  async findAll(): Promise<Workflow[]> {
    return await this.workflowRepository.find();
  }

  async findOne(id: string): Promise<Workflow | null> {
    return await this.workflowRepository.findOne({
      where: { id_workflow: id.toString() },
    });
  }

  async update(
    id: string,
    updateWorkflowDto: UpdateWorkflowDto,
  ): Promise<Workflow> {
    const workflow = await this.findOne(id);
    if (!workflow) {
      throw new NotFoundException(`Workflow not found with id: ${id}`);
    }
    workflow.id_workflow = id; // Ensure the ID remains unchanged
    workflow.name = updateWorkflowDto.name ?? workflow.name;
    workflow.path_endpoint =
      updateWorkflowDto.path_endpoint ?? workflow.path_endpoint;

    return await this.workflowRepository.save(workflow);
  }

  // REMOVE LOGICAL DELETE
  async remove(id: string): Promise<void> {
    const workflow = await this.findOne(id);
    if (!workflow) {
      throw new NotFoundException(`Workflow not found with id: ${id}`);
    }
    workflow.isActive = false;
    await this.workflowRepository.save(workflow);
  }
}
