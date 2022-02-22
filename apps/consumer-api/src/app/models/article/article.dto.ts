import {
  IsID,
  IsOptionalDate,
  IsRequiredString,
  validateModel,
} from '@nx-cms/common/validation';
import { IsBoolean, IsDate } from 'class-validator';
import { ArticleDtoProps } from './article-dto.props';

export class ArticleDto implements ArticleDtoProps {
  @IsID()
  public readonly id: string;
  @IsRequiredString()
  public readonly title: string;
  @IsRequiredString()
  public readonly slug: string;
  public readonly content: string;
  @IsDate()
  public readonly createdAt: Date;
  @IsOptionalDate()
  public readonly updatedAt?: Date;
  @IsOptionalDate()
  public readonly publishedAt?: Date;
  @IsBoolean()
  public readonly published: boolean;

  constructor(props: ArticleDtoProps) {
    const {
      id,
      title,
      slug,
      content,
      createdAt,
      published,
      publishedAt,
      updatedAt,
    } = props;
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.createdAt = createdAt;
    this.published = published;
    this.publishedAt = publishedAt;
    this.updatedAt = updatedAt;

    validateModel(this);
  }
}
