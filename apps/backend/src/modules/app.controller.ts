import { Controller, Get, Version } from "@nestjs/common";

@Controller()
export class AppController {

    @Get('health-check')
    @Version('1')
    getStatus(): { message: string } {
        return { message: "Whisora Backend is running" };
    }

}