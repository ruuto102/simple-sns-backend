import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environment';

@Module({
  imports: [MongooseModule.forRoot(environment.mongo.uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
