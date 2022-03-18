import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateHairstyleDto } from "./dto/create-hairstyle.dto";
import { UpdateHairstyleDto } from "./dto/update-hairstyle.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Hairstyle } from "./entities/hairstyle.entity";
import { Repository } from "typeorm";
import { HairstyleType } from "./types";

@Injectable()
export class HairstyleService {
    private static BEAUTY_TAG_TYPE = "hairstyle";
    private static BEAUTY_TAG = "braids";

    constructor(@InjectRepository(Hairstyle) private readonly repository: Repository<Hairstyle>) {}

    createHairstyle(createHairstyleDto: CreateHairstyleDto): Promise<Hairstyle> {
        const hairstyle = this.repository.create(createHairstyleDto);
        return this.repository.save(hairstyle);
    }

    async findAllHairstyles(): Promise<Hairstyle[]> {
        const hairstyles = await Hairstyle.count();
        if (!hairstyles) {
            throw new NotFoundException("Hairstyles do not exist.");
        }
        return this.repository.find();
    }

    async findHairstyle(id: number): Promise<Hairstyle> {
        const hairstyle = await this.repository.findOne(id);
        if (!hairstyle) {
            throw new NotFoundException(`Hairstyle with id ${id} not found.`);
        }
        return hairstyle;
    }

    async updateHairstyle(id: number, updateHairstyleDto: UpdateHairstyleDto): Promise<Hairstyle> {
        const hairstyle = await this.repository.preload({ id: id, ...updateHairstyleDto });
        if (!hairstyle) {
            throw new NotFoundException(`Hairstyle with id ${id} not found.`);
        }

        return this.repository.save(hairstyle);
    }

    async removeHairstyle(id: number): Promise<Hairstyle> {
        const hairstyle = await this.findHairstyle(id);
        return this.repository.remove(hairstyle);
    }

    async filterHairstyle(params): Promise<Hairstyle | HairstyleType> {
        const query = await this.repository.query("SELECT * FROM hairstyle WHERE hairstyle.name LIKE $1", ["%braids"]);

        if (query && params.type === HairstyleService.BEAUTY_TAG_TYPE && params.tag === HairstyleService.BEAUTY_TAG) {
            return query;
        }

        if (params.type === "" || params.tag === "" || params.type !== HairstyleService.BEAUTY_TAG_TYPE) {
            throw new BadRequestException(`Query parameters need to be checked.`);
        }

        if (params.tag !== "" && params.type === HairstyleService.BEAUTY_TAG_TYPE) {
            const insertQuery = await this.repository.query("INSERT INTO hairstyle (name) VALUES ($1)", [params.tag]);
            if (insertQuery) {
                return {
                    message: `${params.tag} tag is added to database whose type is ${params.type}`
                };
            }
        }
    }
}
