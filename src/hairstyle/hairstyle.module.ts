import { Module } from "@nestjs/common";
import { HairstyleService } from "./hairstyle.service";
import { HairstyleController } from "./hairstyle.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hairstyle } from "./entities/hairstyle.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Hairstyle])],
    controllers: [HairstyleController],
    providers: [HairstyleService]
})
export class HairstyleModule {}
