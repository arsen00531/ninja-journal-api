import { UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WsException } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { MessageDto } from "./dto/message.dto";
import { ValidationError } from "class-validator";
import { WebsocketExceptionsFilter } from "./filter/ws.filter";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class SocketService implements OnGatewayConnection {

    handleConnection(@ConnectedSocket() client: Socket) {
        console.log(client.id);
        console.log("Connected");
    }

    @SubscribeMessage('message')
    @UsePipes(new ValidationPipe())
    @UseFilters(WebsocketExceptionsFilter)
    handleEvent(@MessageBody() dto: MessageDto, @ConnectedSocket() client: Socket) {
        
    }

}