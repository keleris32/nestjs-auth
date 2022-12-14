import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged In!', data: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user;
  }
}
