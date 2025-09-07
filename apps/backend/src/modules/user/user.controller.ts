import { Body, Controller, Get, Post, Version } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entity/user.entity";

@Controller('user')
export class UserController {
    public constructor(private readonly userService: UserService) {}

    @Get('status')
    @Version('1')
    public getStatus(): string {
        return this.userService.checkStatus();
    }

    @Post('create')
    @Version('1')
    public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }
}