import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Goal } from 'src/db/goal.schema';
import CreateGoalEntity from 'src/db/create-goal.entity';
import { GoalService } from './goal.service';

@Controller('goal')
export class GoalController {
  constructor(private readonly service: GoalService) {}

  @MessagePattern('create')
  createGoal(@Payload() data: CreateGoalEntity): Promise<Goal> {
    return this.service.create(data);
  }

  @MessagePattern('get-all')
  findAll(): Promise<Goal[]> {
    return this.service.findAll();
  }
}
