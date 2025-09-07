import { Controller, Get, Version } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    public constructor(private readonly authService: AuthService) {}

    @Get('status')
    @Version('1')
    public getStatus(): { message: string } {
        return { 'message': this.authService.checkStatus() };
    }

}