import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('api/user')
export class AuthentificationController {

    constructor(
        private readonly authentificationService: AuthentificationService
    ) {}

    @Post()
    @UsePipes(new ValidationPipe())
    registration(@Body() dto: RegisterDto) {
        return this.authentificationService.registration(dto)
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() dto: LoginDto) {
        return this.authentificationService.login(dto)
    }
}
