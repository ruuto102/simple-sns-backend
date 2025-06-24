import { Module } from "@nestjs/common";
import { UsersService } from "./user/user.service";
import { UsersController } from "./user/user.controller";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
