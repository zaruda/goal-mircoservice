import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import CreateGoalEntity from './contracts/create-goal.contract';
import UpdateGoalEntity from './contracts/update-goal.contract';
import { GoalService } from './goal.service';
import GoalContract from './contracts/goal.contract';

@Controller('goals')
export class GoalController {
  constructor(private readonly service: GoalService) {}

  @MessagePattern('get')
  async findAll(): Promise<GoalContract[]> {
    return await this.service.findAll();
  }

  @MessagePattern('create')
  async create(@Payload() data: CreateGoalEntity): Promise<GoalContract> {
    return await this.service.create(data);
  }

  @MessagePattern('getById')
  async findById(@Payload() id: string): Promise<GoalContract> {
    return await this.service.findById(id);
  }

  @MessagePattern('updateById')
  async updateById(
    @Payload() payload: { id: string; goal: UpdateGoalEntity },
  ): Promise<GoalContract> {
    const { id, goal } = payload;

    return await this.service.updateById(id, goal);
  }

  @MessagePattern('deleteById')
  async deleteById(@Payload() id: string): Promise<void> {
    return await this.service.deleteById(id);
  }
}
