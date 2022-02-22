import {
  IsID,
  IsRequiredString,
  validateModel,
} from '@nx-cms/common/validation';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateCmsArticleCommandProps } from './create-cms-article-comman.props';

export class CreateCmsArticleCommand implements CreateCmsArticleCommandProps {
  @IsRequiredString()
  public readonly title: string;
  @IsRequiredString()
  public readonly content: string;
  @IsOptional()
  @IsBoolean()
  public readonly published?: boolean;
  @IsID()
  public readonly accountId: string;

  constructor(props: CreateCmsArticleCommandProps) {
    const { accountId, content, title, published } = props;
    this.title = title;
    this.content = content;
    this.published = published;
    this.accountId = accountId;

    validateModel(this);
  }
}
