import { Body, Controller, Post } from '@nestjs/common';
import { CreateArticleDto } from './models/article/create-article.dto';
import { CmsConsumerService } from './services/cms-consumer-service';

@Controller('/article')
export class AppController {
  constructor(private readonly cmsConsumerService: CmsConsumerService) {}

  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.cmsConsumerService.createArticle(createArticleDto);
  }
}
