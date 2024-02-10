import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SocketsEntity } from "apps/sockets/src/sockets/entities/sockets.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('TYPEORM_URL'),
                synchronize: true,
                entities: [SocketsEntity]
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}