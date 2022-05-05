import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const isProduction = process.env.APP_ENV === 'production';
export const pgOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: isProduction,
  extra: {
    ssl: isProduction ? { rejectUnauthorized: false } : null,
  },
  logging: !isProduction,
  synchronize: false,
  entities: ['dist/modules/**/*.entity.js'],
};

export const PgConfig = {
  ...pgOptions,
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'dist/database/migrations',
  },
  factories: ['dist/database/factories/**/*.js'],
  seeds: ['dist/database/seeders/*.js'],
};

export default PgConfig;
