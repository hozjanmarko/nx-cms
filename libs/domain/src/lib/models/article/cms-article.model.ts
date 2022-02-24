import {
  IsID,
  IsOptionalDate,
  IsOptionalString,
  IsRequiredString,
  validateModel,
} from '@nx-cms/common/validation';
import { makeUUID, slugify } from '@nx-cms/common/utils';
import { IsBoolean, IsDate } from 'class-validator';

import { CmsArticleProps } from './cms-article.props';

export class CmsArticle {
  @IsID()
  public readonly id: string;
  @IsRequiredString()
  public readonly title: string;
  @IsRequiredString()
  public readonly slug: string;
  @IsOptionalString()
  public readonly content?: string;
  @IsDate()
  public readonly createdAt: Date;
  @IsOptionalDate()
  public readonly updatedAt?: Date;
  @IsOptionalDate()
  public readonly publishedAt?: Date;
  @IsBoolean()
  public readonly published: boolean;
  @IsID()
  public readonly accountId: string;

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

    this.id = id || makeUUID();
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
