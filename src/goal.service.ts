import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, GoalDocument } from 'src/db/goal.schema';
import CreateGoalEntity from './dataContracts/create-goal.entity';

@Injectable()
export class GoalService {
  constructor(@InjectModel(Goal.name) private model: Model<GoalDocument>) {}

  async create(createGoalEntity: CreateGoalEntity): Promise<Goal> {
    const createdGoal = new this.model(createGoalEntity);

    return await createdGoal.save();
  }

  async findAll(): Promise<GoalDocument[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<Goal> {
    return await this.model.findById(id).exec();
  }

  async updateById(id: string, goal: Partial<Goal>): Promise<Goal> {
    return await this.model.findByIdAndUpdate(id, goal).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
