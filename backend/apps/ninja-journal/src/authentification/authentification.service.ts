import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthentificationService {
    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @Inject()
        private readonly configService: ConfigService
    ) {}

    async login(dto: LoginDto) {
        const user = await this.userRepository.findOneBy({
            email: dto.email
        })

        if (!user) {
            return new BadRequestException('User exist already')
        }

        if (await compare(dto.password, user.password)) {
            sign({data: dto.email}, this.configService.get('SECRET_KEY'))
        }
    }

    async registration(dto: RegisterDto) {
        console.log(this.configService.get('SECRET_KEY'));
        return 
        const candidate = await this.userRepository.findBy({
            email: dto.email
        })

        if (candidate) {
            return new BadRequestException('User exist already')
        }
        const hashedPassword = await hash(dto.password, 7)

        this.userRepository.save({
            email: dto.email,
            password: hashedPassword
        })
    }
}
