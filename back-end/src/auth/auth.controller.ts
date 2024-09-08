import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('steam')
  @UseGuards(AuthGuard('steam'))
  steamAuth(@Req() req, @Res() res) {}

  @Get('steam/return')
  @UseGuards(AuthGuard('steam'))
  steamAuthRedirect(@Req() req, @Res() res: Response) {
    const user = req.user;

    res.cookie('steamId', user.profile._json.steamid, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.redirect(`${process.env.BASE_URL_FRONT}/teste`);
  }
}
