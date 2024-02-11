import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';

@Module({
    controllers: [
        SocketController
    ],
    providers: []
})
export class SocketModule {}
