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
        private readonly configService: ConfigService
    ) {}

    async login(dto: LoginDto) {
        const user = await this.userRepository.findOneBy({
            email: dto.email
        })

        if (!user || !(await compare(dto.password, user.password))) {
            return new BadRequestException('User exist already or password incorrect')
        }

        if (await compare(dto.password, user.password)) {
            return sign({data: dto.email}, this.configService.get('SECRET_KEY'))
        }
    }

    async registration(dto: RegisterDto) {
        const candidate = await this.userRepository.findOneBy({
            email: dto.email
        })

        if (candidate) {
            return new BadRequestException('User exist already')
        }
        const hashedPassword = await hash(dto.password, 7)

        this.userRepository.save({
            email: dto.email,
            name: dto.name,
            password: hashedPassword
        })

        return sign({data: dto.email}, this.configService.get('SECRET_KEY'))
    }
}
