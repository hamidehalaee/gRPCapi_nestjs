import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions  } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options:{
        package: 'proto',
        protoPath: join(__dirname, 'proto/hero.proto'),
      },
    }
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();

    

