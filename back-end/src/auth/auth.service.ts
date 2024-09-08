import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class AuthService extends PassportSerializer {
  serializeUser(user: any, done: (err: any, user: any) => void) {
    done(null, user); // Armazena o usuário na sessão
  }

  deserializeUser(payload: any, done: (err: any, user: any) => void) {
    // Carrega o usuário a partir dos dados armazenados na sessão
    done(null, payload);
  }
}
