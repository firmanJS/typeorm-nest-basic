import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './utils/exception';
import { AppConfigModule } from './config/app/app.module';
import { PostgresConfigModule } from './config/database/postgres/pg.module';
import { TypeOrmProviderModule } from './provider/typeorm.provider';
import { AppConfigService } from './config/app/app.service';
import { PostgresConfigService } from './config/database/postgres/pg.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { RegisterModule } from './modules';

@Module({
  imports: [
    ConfigModule,
    AppConfigModule,
    PostgresConfigModule,
    TypeOrmProviderModule,
    ...RegisterModule,
  ],
  providers: [
    ConfigService,
    AppConfigService,
    PostgresConfigService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
