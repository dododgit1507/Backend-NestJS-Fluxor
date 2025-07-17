import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkflowAssignmentDto {

    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    workflowId: string;
    
}
