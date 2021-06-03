import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, GoalDocument } from 'src/db/goal.schema';
import CreateGoalEntity from './entities/create-goal.entity';
import GoalEntity from './entities/goal.entity';
import UpdateGoalEntity from './entities/update-goal.entity';

@Injectable()
export class GoalService {
  constructor(@InjectModel(Goal.name) private model: Model<GoalDocument>) {}

  async create(createGoalEntity: CreateGoalEntity): Promise<GoalEntity> {
    const createdGoal = new this.model(createGoalEntity);

    return await createdGoal.save();
  }

  async findAll(): Promise<GoalEntity[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<GoalEntity> {
    return await this.model.findById(id).exec();
  }

  async updateById(id: string, goal: UpdateGoalEntity): Promise<GoalEntity> {
    await this.model.findByIdAndUpdate(id, goal).exec();

    return await this.findById(id);
  }

  async deleteById(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
