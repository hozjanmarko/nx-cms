import {
  IsID,
  IsOptionalDate,
  IsRequiredString,
  validateModel,
} from '@nx-cms/common/validation';
import { slugify } from '@nx-cms/common/utils';
import { IsBoolean, IsDate } from 'class-validator';

import { CmsArticleProps } from './cms-article.props';

export class CmsArticle {
  @IsID()
  protected readonly id?: string;
  @IsRequiredString()
  protected readonly title: string;
  @IsRequiredString()
  protected readonly slug: string;
  @IsRequiredString()
  protected readonly content: string;
  @IsDate()
  protected readonly createdAt: Date;
  @IsOptionalDate()
  protected readonly updatedAt?: Date;
  @IsOptionalDate()
  protected readonly publishedAt?: Date;
  @IsBoolean()
  protected readonly published: boolean;
  @IsID()
  protected readonly accountId: string;

  constructor(props: CmsArticleProps) {
    const {
      id,
      title,
      slug,
      content,
      accountId,
      createdAt,
      published,
      publishedAt,
      updatedAt,
    } = props;

    this.id = id || makeUuid();
    this.title = title;
    this.content = content;
    this.accountId = accountId;
    this.content = content;
    this.published = !!published;
    this.publishedAt = publishedAt;
    this.slug = slug || slugify(title);
    this.updatedAt = updatedAt;
    this.createdAt = createdAt || new Date();

    validateModel(this);
  }
}
function makeUuid(): string {
  throw new Error('Function not implemented.');
}
