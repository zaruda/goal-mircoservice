import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateGoalEntity from './contracts/create-goal.contract';
import Goal from './goal.entity';
import UpdateGoalEntity from './contracts/update-goal.contract';

@Injectable()
export class GoalService {
  constructor(@InjectRepository(Goal) private repository: Repository<Goal>) {}

  async create(createGoalEntity: CreateGoalEntity): Promise<Goal> {
    const createdGoal = this.repository.create(createGoalEntity);

    return await createdGoal.save();
  }

  async findAll(): Promise<Goal[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Goal> {
    return await this.repository.findOneOrFail(id);
  }

  async updateById(id: string, goal: UpdateGoalEntity): Promise<Goal> {
    await this.repository.update(id, goal);

    return await this.findById(id);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
