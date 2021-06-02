import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Goal } from 'src/db/goal.schema';
import CreateGoalEntity from './dataContracts/create-goal.entity';
import UpdateGoalEntity from './dataContracts/update-goal.entity';
import { GoalService } from './goal.service';

@Controller('goals')
export class GoalController {
  constructor(private readonly service: GoalService) {}

  @MessagePattern('get')
  async findAll(): Promise<Goal[]> {
    return await this.service.findAll();
  }

  @MessagePattern('create')
  async create(@Payload() data: CreateGoalEntity): Promise<Goal> {
    return await this.service.create(data);
  }

  @MessagePattern('getById')
  async findById(@Payload() id: string): Promise<Goal> {
    return await this.service.findById(id);
  }

  @MessagePattern('updateById')
  async updateById(
    @Payload() payload: { id: string; goal: UpdateGoalEntity },
  ): Promise<Goal> {
    const { id, goal } = payload;

    return await this.service.updateById(id, goal);
  }

  @MessagePattern('deleteById')
  async deleteById(@Payload() id: string): Promise<void> {
    return await this.service.deleteById(id);
  }
}
