import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgConfig } from '../config/database/postgres/pg.orm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...PgConfig,
      }),
    }),
  ],
})
export class TypeOrmProviderModule {}
