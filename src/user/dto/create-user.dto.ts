import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "Nana", description: "Name of the user" })
  name: string;

  @ApiProperty({
    example: "Engineer who loves traveling",
    description: "User bio (self introduction)",
  })
  bio: string;
}
