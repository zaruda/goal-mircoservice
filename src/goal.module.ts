import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import GoalTable from 'src/db/goal.table';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';
import DatabaseModule from './db';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    GoalTable,
  ],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
