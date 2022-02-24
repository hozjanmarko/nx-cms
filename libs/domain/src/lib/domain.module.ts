import { Module } from '@nestjs/common';
import { CmsDataAccessModule } from '@nx-cms/infrastructure/cms-data-access';
import { CmsArticleService } from './services/cms-articles.service';

@Module({
  imports: [CmsDataAccessModule],
  providers: [CmsArticleService],
  exports: [CmsArticleService],
})
export class DomainModule {}
