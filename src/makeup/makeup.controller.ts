import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from "@nestjs/common";
import { MakeupService } from "./makeup.service";
import { CreateMakeupDto } from "./dto/create-makeup.dto";
import { UpdateMakeupDto } from "./dto/update-makeup.dto";

@Controller("api/makeup")
export class MakeupController {
    constructor(private readonly makeupService: MakeupService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createMakeupDto: CreateMakeupDto) {
        return this.makeupService.createMakeup(createMakeupDto);
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.makeupService.findAllMakeup();
    }

    @HttpCode(HttpStatus.OK)
    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.makeupService.findMakeup(id);
    }

    @HttpCode(HttpStatus.OK)
    @Patch(":id")
    update(@Param("id") id: number, @Body() updateMakeupDto: UpdateMakeupDto) {
        return this.makeupService.updateMakeup(id, updateMakeupDto);
    }

    @HttpCode(HttpStatus.OK)
    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.makeupService.removeMakeup(+id);
    }
}
