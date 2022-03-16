import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateHairstyleDto } from "./dto/create-hairstyle.dto";
import { UpdateHairstyleDto } from "./dto/update-hairstyle.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Hairstyle } from "./entities/hairstyle.entity";
import { Repository } from "typeorm";

@Injectable()
export class HairstyleService {
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
}
