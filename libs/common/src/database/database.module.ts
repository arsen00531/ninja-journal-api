import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('TYPEORM_URL'),
                synchronize: true,
                entities: []
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}