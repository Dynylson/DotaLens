import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: 'http://localhost:3333/auth/steam/return',
      realm: 'http://localhost:3333/',
      apiKey: process.env.STEAM_API_KEY,
    });
  }

  async validate(identifier: string, profile: any, done: any): Promise<any> {
    const user = { identifier, profile };
    done(null, user);
  }
}
