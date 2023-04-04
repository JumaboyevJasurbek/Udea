import { registerAs } from '@nestjs/config';

class AppConfig {
  readonly port: number;
}
console.log();

export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: 1111,
  }),
);
