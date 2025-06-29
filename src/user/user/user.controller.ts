import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../dto/create-user.dto";

@ApiTags("user")
@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
