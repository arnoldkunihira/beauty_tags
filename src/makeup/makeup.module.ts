import { Module } from "@nestjs/common";
import { MakeupService } from "./makeup.service";
import { MakeupController } from "./makeup.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Makeup } from "./entities/makeup.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Makeup])],
    controllers: [MakeupController],
    providers: [MakeupService]
})
export class MakeupModule {}
