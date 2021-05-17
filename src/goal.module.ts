import { Module } from '@nestjs/common';

import goalTable from 'src/db/goal.table';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';
import databaseModule from './db';

@Module({
  imports: [databaseModule, goalTable],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
