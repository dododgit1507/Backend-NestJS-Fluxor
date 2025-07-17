import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkflowAssignmentService } from './workflow-assignment.service';
import { CreateWorkflowAssignmentDto } from './dto/create-workflow-assignment.dto';
import { UpdateWorkflowAssignmentDto } from './dto/update-workflow-assignment.dto';

@Controller('workflow-assignment')
export class WorkflowAssignmentController {
  constructor(private readonly workflowAssignmentService: WorkflowAssignmentService) {}

  @Post()
  create(@Body() createWorkflowAssignmentDto: CreateWorkflowAssignmentDto) {
    return this.workflowAssignmentService.create(createWorkflowAssignmentDto);
  }

  @Get()
  findAll() {
    return this.workflowAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowAssignmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkflowAssignmentDto: UpdateWorkflowAssignmentDto) {
    return this.workflowAssignmentService.update(+id, updateWorkflowAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowAssignmentService.remove(+id);
  }
}
