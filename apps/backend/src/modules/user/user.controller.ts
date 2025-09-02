import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    public constructor(private readonly userService: UserService) {}

    @Get('status')
    public getStatus(): string {
        return this.userService.checkStatus();
    }

}