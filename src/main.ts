import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GoalModule } from './goal.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GoalModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'goals',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen(() =>
    console.info("Microservice 'goal-service' is listening"),
  );
}
bootstrap();
