import { CmsArticle } from '../models/article/cms-article.model';

export interface CmsArticleRepositoryPort {
  createCmsArticle(cmsArticle: CmsArticle): Promise<CmsArticle>;
}

export const CmsArticleRepositoryPort = Symbol('CmsArticleRepositoryPort');
