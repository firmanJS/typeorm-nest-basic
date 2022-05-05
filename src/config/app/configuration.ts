import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  APP_ENV: process.env.APP_ENV,
  APP_NAME: process.env.APP_NAME,
  APP_PORT: process.env.APP_PORT,
  APP_LANGUAGE: process.env.APP_LANGUAGE,
}));
