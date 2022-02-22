import { IsOptionalString, IsRequiredString } from '@nx-cms/common/validation';
import { IsBoolean, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsRequiredString()
  title: string;
  @IsOptionalString()
  content?: string;
  @IsOptional()
  @IsBoolean()
  published?: boolean;
}
