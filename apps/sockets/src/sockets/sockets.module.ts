import { Module } from '@nestjs/common';
import { SocketsController } from './sockets.controller';
import { SocketsService } from './sockets.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import * as Joi from 'joi'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocketsEntity } from './entities/sockets.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/sockets/.env',
      validationSchema: Joi.object({
        TYPEORM_URL: Joi.string().required()
      })
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([SocketsEntity])
  ],
  controllers: [SocketsController],
  providers: [SocketsService],
})
export class SocketsModule {}