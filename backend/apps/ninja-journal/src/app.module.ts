import { Module } from '@nestjs/common';
import { AuthentificationModule } from './authentification/authentification.module';
import { CommonConfigModule, DatabaseModule } from '@app/common';

@Module({
  imports: [AuthentificationModule, DatabaseModule, CommonConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
