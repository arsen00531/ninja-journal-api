import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class SocketService implements OnGatewayConnection {

    @SubscribeMessage('lox')
    handleEvent(@MessageBody() dto: any, @ConnectedSocket() client: Socket) {
        console.log(client.id);
        client.emit('sam_lox', {data: 'sam_lox'})
    }

    handleConnection(@ConnectedSocket() client: Socket) {
        console.log(client.id);
        console.log("Connected");
    }
}