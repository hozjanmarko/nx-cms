import { DynamicModule, Inject, Module } from '@nestjs/common';
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
          inject: [CmsDataAccessModuleOptions],
          useFactory: async (
            cmsDataAccessModuleOptions: CmsDataAccessModuleOptions
          ) => {
            const connectionOptions =
              await cmsDataAccessModuleOptions.useFactory();
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
          provide: CmsDataAccessModuleOptions,
          useValue: options,
        },
        {
          provide: CmsArticleRepositoryPort,
          useClass: CmsArticlesRepositoryAdapter,
        },
      ],
      exports: [CmsArticleRepositoryPort],
    };
  }
}
