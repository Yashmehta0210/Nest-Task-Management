import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    return;
  }
}
