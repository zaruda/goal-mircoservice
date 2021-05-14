import { Module } from '@nestjs/common';
import databaseModule from './db';
import { GoalModule } from './modules/goal/goal.module';

@Module({
  imports: [databaseModule, GoalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
