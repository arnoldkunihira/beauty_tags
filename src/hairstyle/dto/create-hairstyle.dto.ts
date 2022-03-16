import { IsNotEmpty, IsString } from "class-validator";

export class CreateHairstyleDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
