import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateMakeupDto } from "./dto/create-makeup.dto";
import { UpdateMakeupDto } from "./dto/update-makeup.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Makeup } from "./entities/makeup.entity";
import { Repository } from "typeorm";

@Injectable()
export class MakeupService {
    constructor(@InjectRepository(Makeup) private readonly repository: Repository<Makeup>) {}

    createMakeup(createMakeupDto: CreateMakeupDto): Promise<Makeup> {
        const makeup = this.repository.create(createMakeupDto);
        return this.repository.save(makeup);
    }

    async findAllMakeup(): Promise<Makeup[]> {
        const makeup = await Makeup.count();
        if (!makeup) {
            throw new NotFoundException("Makeup does not exist.");
        }
        return this.repository.find();
    }

    async findMakeup(id: number): Promise<Makeup> {
        const makeup = await this.repository.findOne(id);
        if (!makeup) {
            throw new NotFoundException(`Makeup with id ${id} not found.`);
        }
        return makeup;
    }

    async updateMakeup(id: number, updateMakeupDto: UpdateMakeupDto): Promise<Makeup> {
        const makeup = await this.repository.preload({ id: id, ...updateMakeupDto });
        if (!makeup) {
            throw new NotFoundException(`Makeup with id ${id} not found.`);
        }

        return this.repository.save(makeup);
    }

    async removeMakeup(id: number): Promise<Makeup> {
        const makeup = await this.findMakeup(id);
        return this.repository.remove(makeup);
    }
}
