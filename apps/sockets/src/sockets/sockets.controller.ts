import { Controller, Get } from '@nestjs/common';

@Controller('sockets')
export class SocketsController {
    @Get()
    get() {
        return 'working1'
    }
}
