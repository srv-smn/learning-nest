import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
