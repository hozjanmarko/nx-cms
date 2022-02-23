import { Module } from '@nestjs/common';
import { DomainModule } from '@nx-cms/domain';
import { CmsDataAccessModule } from '@nx-cms/infrastructure/cms-data-access';

import { AppController } from './app.controller';
import { CmsConsumerService } from './services/cms-consumer-service';

@Module({
  imports: [CmsDataAccessModule, DomainModule],
  controllers: [AppController],
  providers: [CmsConsumerService],
})
export class AppModule {}
