import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mongodb',
  url: process.env.MONGODB_URI,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsRun: false,
  useUnifiedTopology: true,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export = config;
