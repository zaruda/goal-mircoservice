import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseModule from './db';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';
import Goal from './goal.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Goal])],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
