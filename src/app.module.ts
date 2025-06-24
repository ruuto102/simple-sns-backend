import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { environment } from "../environment";
import { UserModule } from "./user/user.module";

@Module({
  imports: [MongooseModule.forRoot(environment.mongo.uri), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
