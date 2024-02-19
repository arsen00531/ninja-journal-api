import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '@app/common/database/entities/message.entity';
import { SocketService } from './socket.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Message]),
    ],
    controllers: [SocketController],
    providers: [SocketService]
})
export class SocketModule {}
