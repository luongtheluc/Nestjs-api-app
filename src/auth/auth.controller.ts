import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    @Post('/register')
    register(@Req() request: Request) {
        console.log(request.body);
        return {
            data: request.body,
            msg: "Success"
        }
    }


}
