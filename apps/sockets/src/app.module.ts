import { CommonConfigModule, DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { SocketModule } from './socket/socket.module';

@Module({
    imports: [
        CommonConfigModule,
        DatabaseModule,
        SocketModule,
    ],
    providers: []
})
export class AppModule {

}