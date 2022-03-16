import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from "@nestjs/common";
import { HairstyleService } from "./hairstyle.service";
import { CreateHairstyleDto } from "./dto/create-hairstyle.dto";
import { UpdateHairstyleDto } from "./dto/update-hairstyle.dto";

@Controller("api/hairstyles")
export class HairstyleController {
    constructor(private readonly hairstyleService: HairstyleService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() createHairstyleDto: CreateHairstyleDto) {
        return this.hairstyleService.createHairstyle(createHairstyleDto);
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return this.hairstyleService.findAllHairstyles();
    }

    @HttpCode(HttpStatus.OK)
    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.hairstyleService.findHairstyle(id);
    }

    @HttpCode(HttpStatus.OK)
    @Patch(":id")
    update(@Param("id") id: number, @Body() updateHairstyleDto: UpdateHairstyleDto) {
        return this.hairstyleService.updateHairstyle(+id, updateHairstyleDto);
    }

    @HttpCode(HttpStatus.OK)
    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.hairstyleService.removeHairstyle(id);
    }
}
