import { CommonConfigModule } from "@app/common";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SocketModule } from './socket/socket.module';
import { SocketService } from "./socket/socket.controller";

@Module({
    imports: [
        CommonConfigModule,
        TypeOrmModule.forFeature([]),
        SocketModule,
    ],
    controllers: [],
    providers: [SocketService]
})
export class AppModule {

}