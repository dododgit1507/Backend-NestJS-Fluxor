import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkflowAssignmentDto } from './create-workflow-assignment.dto';

export class UpdateWorkflowAssignmentDto extends PartialType(CreateWorkflowAssignmentDto) {}
