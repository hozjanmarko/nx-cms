import { Module } from '@nestjs/common';
import { DomainModule } from '@nx-cms/domain';

import { AppController } from './app.controller';
import { CmsConsumerService } from './services/cms-consumer-service';

@Module({
  imports: [DomainModule],
  controllers: [AppController],
  providers: [CmsConsumerService],
})
export class AppModule {}
