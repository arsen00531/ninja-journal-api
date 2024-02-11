import { Controller, Get, Res } from "@nestjs/common";
import { FastifyReply } from "fastify";

@Controller()
export class SocketController {
    
    @Get()
    someGet(@Res() response: FastifyReply) {
        response.send('lox')
    }
}