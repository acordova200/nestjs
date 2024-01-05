import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [TaskModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
