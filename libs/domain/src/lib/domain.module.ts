import { Module } from '@nestjs/common';
import { CmsArticleService } from './services/cms-articles.service';

@Module({
  controllers: [],
  providers: [CmsArticleService],
  exports: [CmsArticleService],
})
export class DomainModule {}
