import { UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { MessageDto } from "./dto/message.dto";
import { WebsocketExceptionsFilter } from "./filter/ws.filter";
import { Message } from "@app/common/database/entities/message.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class SocketService implements OnGatewayConnection {

    constructor(
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
    async getMessage(@MessageBody() dto: MessageDto, @ConnectedSocket() client: Socket) {
        
        await this.messageRepository.save(dto)
        client.emit('success', dto)
    }

}