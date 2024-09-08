import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SteamStrategy } from './auth/steam.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, SteamStrategy],
})
export class AppModule {}
