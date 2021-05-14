import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Goal {
  @Prop()
  date: string;
}

export type GoalDocument = Goal & Document;

export const GoalSchema = SchemaFactory.createForClass(Goal);
