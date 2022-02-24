import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmsArticleRepositoryPort } from '@nx-cms/domain';
import { CmsArticlesRepositoryAdapter, CmsDataAccessModuleOptions } from '.';
import { CmsArticleEntity } from './models/entities/cms-article.entity';

@Module({})
export class CmsDataAccessModule {
  public static registerAsync(
    options: CmsDataAccessModuleOptions
  ): DynamicModule {
    return {
      module: CmsDataAccessModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            const connectionOptions = await options.useFactory();
            return {
              type: 'postgres',
              port: connectionOptions.port,
              database: connectionOptions.database,
              username: connectionOptions.username,
              password: connectionOptions.password,
              ssl: !!connectionOptions.ssl,
              entities: [CmsArticleEntity],
            };
          },
        }),
      ],
      providers: [
        {
          provide: CmsArticleRepositoryPort,
          useClass: CmsArticlesRepositoryAdapter,
        },
      ],
      exports: [CmsArticleRepositoryPort],
    };
  }
}
