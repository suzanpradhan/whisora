import { Injectable } from "@nestjs/common";
import { IAudioProcessor } from "./interfaces/audio-processor.interface";
import { BatchAudioProcessor } from "./batch-audio.processor";
import { RealtimeAudioProcessor } from "./realtime-audio.processor";

@Injectable()
export class AudioService {
    private batchProcessor: IAudioProcessor;
    private realTimeProcessor: IAudioProcessor;

    constructor () {
        this.batchProcessor = new BatchAudioProcessor();
        this.realTimeProcessor = new RealtimeAudioProcessor();
    }

    async processBatchAudio(filePath: string) {
        return this.batchProcessor.processAudio(filePath);
    }

    async processRealtimeAudio(stream: NodeJS.ReadableStream) {
        return this.realTimeProcessor.processAudio(stream);
    }
}