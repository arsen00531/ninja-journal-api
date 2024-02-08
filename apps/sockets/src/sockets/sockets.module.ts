import { Module } from '@nestjs/common';
import { SocketsController } from './sockets.controller';
import { SocketsService } from './sockets.service';
import { ConfigModule } from '@nestjs/config';
import { GatewayModule } from '../gateway/gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/sockets/.env'
    }),
    GatewayModule
  ],
  controllers: [SocketsController],
  providers: [SocketsService],
})
export class SocketsModule {}