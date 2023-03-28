import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { RabbitMQModule } from 'src/RabbitMQ.module';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: USER.name,
        useFactory: () => UserSchema,
      },
    ]),
    RabbitMQModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
