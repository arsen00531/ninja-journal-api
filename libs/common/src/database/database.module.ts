import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                url: configService.get('TYPEORM_URL')
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}