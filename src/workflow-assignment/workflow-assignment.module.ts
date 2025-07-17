import { Module } from '@nestjs/common';
import { WorkflowAssignmentService } from './workflow-assignment.service';
import { WorkflowAssignmentController } from './workflow-assignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowAssignment } from './entities/workflow-assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkflowAssignment])],
  controllers: [WorkflowAssignmentController],
  providers: [WorkflowAssignmentService],
  exports: [WorkflowAssignmentService],
})
export class WorkflowAssignmentModule {}
