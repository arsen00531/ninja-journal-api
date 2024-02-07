import { Module } from '@nestjs/common';
import { SocketsController } from './sockets.controller';
import { SocketsService } from './sockets.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/sockets/.env'
    }),
    DatabaseModule
  ],
  controllers: [SocketsController],
  providers: [SocketsService],
})
export class SocketsModule {}
