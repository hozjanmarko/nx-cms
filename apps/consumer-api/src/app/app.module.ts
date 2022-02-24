import { Module } from '@nestjs/common';
import { DomainModule } from '@nx-cms/domain';
import { CmsDataAccessModule } from '@nx-cms/infrastructure/cms-data-access';

import { AppController } from './app.controller';
import { CmsConsumerService } from './services/cms-consumer-service';

@Module({
  imports: [
    CmsDataAccessModule.registerAsync({
      useFactory: () => {
        return {
          database: process.env.TYPEORM_DATABASE,
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          port: process.env?.TYPEORM_PORT
            ? parseInt(process.env?.TYPEORM_PORT, 10)
            : null,
          runMigrations: process.env?.TYPEORM_RUN_MIGRATIONS === 'true',
        };
      },
    }),
    DomainModule,
  ],
  controllers: [AppController],
  providers: [CmsConsumerService],
  exports: [CmsDataAccessModule],
})
export class AppModule {}
