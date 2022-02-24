import { InjectEntityManager } from '@nestjs/typeorm';
import { CmsArticle, CmsArticleRepositoryPort } from '@nx-cms/domain';
import { EntityManager } from 'typeorm';
import {
  mapArticleEntityToCmsArticle,
  mapCmsArticleToEntity,
} from '../mappings/article-entity-mapper';
import { CmsArticleEntity } from '../models/entities/cms-article.entity';

export class CmsArticlesRepositoryAdapter implements CmsArticleRepositoryPort {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}
  async createCmsArticle(cmsArticle: CmsArticle): Promise<CmsArticle> {
    const articleEntity = await this.entityManager
      .getRepository(CmsArticleEntity)
      .save(mapCmsArticleToEntity(cmsArticle));

    return mapArticleEntityToCmsArticle(articleEntity);
  }
}
