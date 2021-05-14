import { Module } from '@nestjs/common';
import goalTable from 'src/db/schemas/goal';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';

@Module({
  imports: [goalTable],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
