import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle("Beauty Tags API")
        .setDescription("API that returns beauty tags to a user.")
        .setVersion("1.0")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(5000);
}

bootstrap();
