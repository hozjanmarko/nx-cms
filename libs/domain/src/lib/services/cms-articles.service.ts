import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateCmsArticleCommand } from '../commands/create-article/create-cms-article.command';
import { CmsArticle } from '../models/article/cms-article.model';
import { CmsArticleRepositoryPort } from '../ports/cms-article-repository.port';

@Injectable()
export class CmsArticleService {
  constructor(
    private readonly cmsArticleRepository: CmsArticleRepositoryPort
  ) {}
  public async getPublishedArticles(): Promise<
    [publishedArticles: CmsArticle[], allPublishedArticles: number]
  > {
    throw new NotImplementedException();
  }

  public async createArticle(
    command: CreateCmsArticleCommand
  ): Promise<CmsArticle> {
    const { accountId, content, title, published } = command;
    const cmsArticle = new CmsArticle({
      accountId,
      content,
      title,
      published,
    });

    return this.cmsArticleRepository.createCmsArticle(cmsArticle);
  }
}
