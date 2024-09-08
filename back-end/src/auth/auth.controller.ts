import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('steam')
  @UseGuards(AuthGuard('steam'))
  steamAuth(@Req() req, @Res() res) {
    // O redirecionamento para o Steam será tratado pelo Passport
  }

  @Get('steam/return')
  @UseGuards(AuthGuard('steam'))
  steamAuthRedirect(@Req() req, @Res() res) {
    // Steam retornará o usuário autenticado
    res.json(req.user); // Envia as informações do usuário para o cliente
  }
}
