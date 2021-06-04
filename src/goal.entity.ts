import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('goal')
class Goal extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column({ type: 'datetime' })
  date: string;

  @Column()
  name: string;
}

export default Goal;
