import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, GoalDocument } from 'src/db/goal.schema';
import CreateGoalEntity from 'src/db/create-goal.entity';

@Injectable()
export class GoalService {
  constructor(@InjectModel(Goal.name) private model: Model<GoalDocument>) {}

  async create(createGoalEntity: CreateGoalEntity): Promise<Goal> {
    const createdGoal = new this.model(createGoalEntity);

    return createdGoal.save();
  }

  async findAll(): Promise<Goal[]> {
    return this.model.find();
  }
}
