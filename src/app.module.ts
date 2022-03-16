import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HairstyleModule } from "./hairstyle/hairstyle.module";
import { MakeupModule } from "./makeup/makeup.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: process.env.DB_SYNCHRONIZE === "true"
        }),
        HairstyleModule,
        MakeupModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
