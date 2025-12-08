import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }


    @Post('/signUp')
    signUp(@Body() body: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(body)
    }

    @Post('/login')
    login(@Body() body: LoginDto): Promise<{ token: string }> {
        return this.authService.login(body)
    }



}
