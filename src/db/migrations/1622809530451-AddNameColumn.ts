import { MigrationInterface } from 'typeorm';
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner';

export class AddNameColumn1622809530451 implements MigrationInterface {
  public async up(queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.findOneAndDelete('goal', { date: '123' });
  }

  public async down(queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.insertOne('goal', { date: '123', name: '123' });
  }
}
