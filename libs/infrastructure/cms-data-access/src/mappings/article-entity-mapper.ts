import { CmsArticle } from '@nx-cms/domain';
import { CmsArticleEntity } from '../models/entities/cms-article.entity';

export function mapCmsArticleToEntity(
  cmsArticle: CmsArticle
): CmsArticleEntity {
  const {
    id,
    accountId,
    createdAt,
    content,
    published,
    slug,
    title,
    publishedAt,
    updatedAt,
  } = cmsArticle;

  const result = new CmsArticleEntity();
  result.id = id;
  result.accountId = accountId;
  result.createdAt = createdAt;
  result.updatedAt = updatedAt;
  result.content = content;
  result.published = published;
  result.slug = slug;
  result.title = title;
  result.publishedAt = publishedAt;

  return result;
}

export function mapArticleEntityToCmsArticle(
  cmsArticleEntity: CmsArticleEntity
): CmsArticle {
  return new CmsArticle({ ...cmsArticleEntity });
}
