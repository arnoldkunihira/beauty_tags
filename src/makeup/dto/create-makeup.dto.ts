import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMakeupDto {
    @ApiProperty({ example: "bridal" })
    @IsNotEmpty()
    @IsString()
    name: string;
}
