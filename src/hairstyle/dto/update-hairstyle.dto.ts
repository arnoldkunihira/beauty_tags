import { PartialType } from "@nestjs/mapped-types";
import { CreateHairstyleDto } from "./create-hairstyle.dto";

export class UpdateHairstyleDto extends PartialType(CreateHairstyleDto) {}
