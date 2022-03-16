import { PartialType } from "@nestjs/swagger";
import { CreateMakeupDto } from "./create-makeup.dto";

export class UpdateMakeupDto extends PartialType(CreateMakeupDto) {}
