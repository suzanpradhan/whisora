import { Controller, Get, Post, UseInterceptors, Version } from "@nestjs/common";
import { AudioService } from "./audio.service";

@Controller('audio')
export class AudioController {
    constructor(private readonly audioService: AudioService) {} 
    
    @Get('status')
    @Version('1')
    public getStatus(): { message: string } {
        return { 'message': 'audio is running' };
    }

    @Get('batch')
    @Version('1')
    // @UseInterceptors(FileInterceptor('file'))
    processBatchAudio() {
        return {message: 'this.audioService.processBatchAudio(file)'};
    }
}