import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '@app/common/database/entities/message.entity';
import { SocketService } from './socket.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.register(),
        TypeOrmModule.forFeature([Message]),
    ],
    controllers: [SocketController],
    providers: [SocketService]
})
export class SocketModule {}
