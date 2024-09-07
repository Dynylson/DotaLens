import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const data = fetch('https://api.opendota.com/api/heroes').then((res) =>
      res.json(),
    );

    return data;
  }
}
