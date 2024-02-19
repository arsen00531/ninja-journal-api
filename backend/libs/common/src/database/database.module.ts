import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./entities/message.entity";
import { Group } from "./entities/group.entity";
import { Student } from "./entities/student.entity";
import { User } from "apps/ninja-journal/src/authentification/entities/users.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('TYPEORM_URL'),
                synchronize: true,
                entities: [
                    Group,
                    Message,
                    Student,
                    User
                ]
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}