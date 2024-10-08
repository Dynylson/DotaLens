import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SteamStrategy } from './steam.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, SteamStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
