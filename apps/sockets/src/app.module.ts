import { CommonConfigModule } from "@app/common";
import { Module } from "@nestjs/common";
import { SocketModule } from './socket/socket.module';
import { SocketService } from "./socket/socket.service";

@Module({
    imports: [
        CommonConfigModule,
        SocketModule,
    ],
    providers: [SocketService]
})
export class AppModule {

}