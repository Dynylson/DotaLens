import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: `${process.env.BASE_URL_BACK}/auth/steam/return`,
      realm: `${process.env.BASE_URL_BACK}/`,
      apiKey: process.env.STEAM_API_KEY,
    });
  }

  async validate(identifier: string, profile: any, done: any): Promise<any> {
    const user = { identifier, profile };
    done(null, user);
  }
}
