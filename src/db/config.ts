import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mongodb',
  url: process.env.MONGODB_URI,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsRun: false,
  useUnifiedTopology: true,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

export = config;
