import { Inject, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { MessageDto } from "./dto/message.dto";
import { WebsocketExceptionsFilter } from "./filter/ws.filter";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Message } from "@app/common/database/entities/message.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Cache } from "cache-manager";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class SocketService implements OnGatewayConnection {

    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    handleConnection(@ConnectedSocket() client: Socket) {
        console.log(client.id);
        console.log("Connected");
    }

    @SubscribeMessage('message')
    @UsePipes(new ValidationPipe())
    @UseFilters(WebsocketExceptionsFilter)
    async handleEvent(@MessageBody() dto: MessageDto, @ConnectedSocket() client: Socket) {
        const cache = await this.cacheManager.get('lox')
        if (!cache) {
            await this.cacheManager.set('lox', 'pipec lox')
        }
        console.log(cache);
        this.messageRepository.save(dto)
        client.emit('answer', 'success')
        
    }

}