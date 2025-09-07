import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { AudioService } from "./audio.service";

@WebSocketGateway({ 
    namespace: 'audio-stream',
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    } 
})
export class AudioGateway {

    @WebSocketServer()
    server: Server;

    constructor(private readonly audioService: AudioService) {}

    @SubscribeMessage('processAudio')
    async handleAudioStream(@MessageBody() data: { stream: NodeJS.ReadableStream }) {
        const result = await this.audioService.processRealtimeAudio(data.stream);
        this.server.emit('audioProcessed', result);
    }

}