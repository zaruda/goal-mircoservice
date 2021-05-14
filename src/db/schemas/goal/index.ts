import { MongooseModule } from '@nestjs/mongoose';
import { Goal, GoalSchema } from './goal.schema';

const goalTable = MongooseModule.forFeature([
  { name: Goal.name, schema: GoalSchema },
]);

export default goalTable;
