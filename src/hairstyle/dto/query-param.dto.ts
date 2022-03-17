import { IsDefined, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class QueryParamDto {
    @ApiProperty({ example: "hairstyle" })
    @IsDefined()
    @IsString()
    type: string;

    @ApiProperty({ example: "braids" })
    @IsDefined()
    @IsString()
    tag: string;
}
