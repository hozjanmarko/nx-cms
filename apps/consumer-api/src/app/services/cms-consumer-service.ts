import { CmsArticleService, CreateCmsArticleCommand } from '@nx-cms/domain';
import { mapCmsArticle } from '../mappings/article/map-cms-atricle';
import { ArticleDto } from '../models/article/article.dto';
import { CreateArticleDto } from '../models/article/create-article.dto';

export class CmsConsumerService {
  constructor(private readonly cmsArticleService: CmsArticleService) {}

  public async createArticle(
    createArticleDto: CreateArticleDto
  ): Promise<ArticleDto> {
    const { title, content, published } = createArticleDto;
    const createArticleCommand = new CreateCmsArticleCommand({
      title,
      content,
      published,
      accountId: '1',
    });
    const article = await this.cmsArticleService.createArticle(
      createArticleCommand
    );

    return mapCmsArticle(article);
  }
}
