import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateHairstyleDto {
    @ApiProperty({ example: "long braids" })
    @IsNotEmpty()
    @IsString()
    name: string;
}
