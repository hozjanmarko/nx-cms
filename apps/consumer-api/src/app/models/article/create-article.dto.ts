import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptionalString, IsRequiredString } from '@nx-cms/common/validation';
import { IsBoolean, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsRequiredString()
  @ApiProperty()
  title: string;
  @IsOptionalString()
  @ApiPropertyOptional()
  content?: string;
  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  published?: boolean;
}
