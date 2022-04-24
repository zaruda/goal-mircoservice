import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GoalModule } from './goal.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GoalModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URI],
        queue: 'goals',
        queueOptions: {
          durable: true,
          messageTtl: 10000,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
