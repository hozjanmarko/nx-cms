import { CmsArticle } from '@nx-cms/domain';
import { ArticleDto } from '../../models/article/article.dto';

export function mapCmsArticle(cmsArticle: CmsArticle): ArticleDto {
  const {
    id,
    title,
    slug,
    content,
    createdAt,
    published,
    publishedAt,
    updatedAt,
  } = cmsArticle;

  return new ArticleDto({
    id,
    title,
    slug,
    content,
    createdAt,
    published,
    publishedAt,
    updatedAt,
  });
}
