import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  providers: [
    {
      provide: 'RABBIT_MQ_CONNECTION', // nombre cualquiera solamente para identificarlo e importarlo en el servicio
      useFactory: () => {
        console.log('env: ', process.env.AMQP_URL);
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.AMQP_URL],
            queue: 'passengers', // nombre de la cola
          },
        });
      },
    },
  ],
  exports: ['RABBIT_MQ_CONNECTION'],
})
export class RabbitMQModule {}
