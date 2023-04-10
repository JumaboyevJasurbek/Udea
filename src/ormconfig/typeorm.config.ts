import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const connectDb: TypeOrmModuleOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  password: "DJ9USbp%iLou", 
  username: "postgres",
  database: "udea",
  entities: [
  ],
  autoLoadEntities: true,
  synchronize: true,
};