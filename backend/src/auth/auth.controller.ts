import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() data) {
        return this.authService.login(data);
    }

    @Post('register')
    async register(@Body() data) {
        return this.authService.register(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Body() data) {
        return data.user;
    }
}