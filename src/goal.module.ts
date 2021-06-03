import { Module } from '@nestjs/common';
import GoalTable from 'src/db/goal.table';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';
import DatabaseModule from './db';

@Module({
  imports: [DatabaseModule, GoalTable],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
