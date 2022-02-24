import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CmsArticleRepositoryPort } from '@nx-cms/domain';
import { CmsDataAccessModuleOptions } from '.';
import { CmsArticleEntity } from './models/entities/cms-article.entity';
import { CmsArticlesRepositoryAdapter } from './services/cms-articles-repository.adapter';
import { initial1645603047094 } from './migrations/1645603047094-initial';

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
              migrations: [initial1645603047094],
              migrationsRun: connectionOptions.runMigrations,
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
      global: true,
    };
  }
}
