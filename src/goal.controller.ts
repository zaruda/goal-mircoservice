import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import CreateGoalEntity from './entities/create-goal.entity';
import GoalEntity from './entities/goal.entity';
import UpdateGoalEntity from './entities/update-goal.entity';
import { GoalService } from './goal.service';

@Controller('goals')
export class GoalController {
  constructor(private readonly service: GoalService) {}

  @MessagePattern('get')
  async findAll(): Promise<GoalEntity[]> {
    return await this.service.findAll();
  }

  @MessagePattern('create')
  async create(@Payload() data: CreateGoalEntity): Promise<GoalEntity> {
    return await this.service.create(data);
  }

  @MessagePattern('getById')
  async findById(@Payload() id: string): Promise<GoalEntity> {
    return await this.service.findById(id);
  }

  @MessagePattern('updateById')
  async updateById(
    @Payload() payload: { id: string; goal: UpdateGoalEntity },
  ): Promise<GoalEntity> {
    const { id, goal } = payload;

    return await this.service.updateById(id, goal);
  }

  @MessagePattern('deleteById')
  async deleteById(@Payload() id: string): Promise<void> {
    return await this.service.deleteById(id);
  }
}
