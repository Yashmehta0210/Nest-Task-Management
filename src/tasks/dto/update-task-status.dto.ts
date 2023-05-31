import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';

export class UpadteTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
