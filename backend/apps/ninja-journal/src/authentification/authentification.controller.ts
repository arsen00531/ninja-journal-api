import { Controller, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthentificationService } from './authentification.service';
import { RegisterDto } from './dto/register.dto';

@Controller('authentification')
export class AuthentificationController {

    constructor(
        private readonly authentificationService: AuthentificationService
    ) {}

    @Post()
    registration(@Res() response: FastifyReply, dto: RegisterDto) {
        this.authentificationService.registration(dto)
    }
}
