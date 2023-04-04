import { Module } from '@nestjs/common';
import { EventsModule } from './modules/events/events.module';
import { NewsModule } from './modules/news/news.module';
import { ConnectionModule } from './modules/connection/connection.module';
import { DescriptionModule } from './modules/description/description.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectDb } from './ormconfig/typeorm.config';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRoot(connectDb),
    EventsModule,
    NewsModule,
    ConnectionModule, 
    DescriptionModule,
  ],
})
export class AppModule {}
