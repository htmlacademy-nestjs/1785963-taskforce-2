import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskCategoryModule } from './task-category/task-category.module';
import { TaskTagModule } from './task-tag/task-tag.module';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [TaskModule, TaskCategoryModule, TaskTagModule, RequestsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
