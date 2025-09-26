import { Inject, Injectable } from "@nestjs/common";
import { IDeepgramService, IRealTimeConnection } from "./interfaces/transcription-service.interface";
import { RealTimeTranscriptionEvents } from "./interfaces/transcription-event.interface";
import { BatchTranscriptionOptions, RealTimeTranscriptionOptions } from "./interfaces/transcription-options.interface";
import { BatchTranscriptionResult, RealTimeTranscriptionResult } from "./interfaces/transcription-result.interface";
import { DeepgramClient } from "@deepgram/sdk";
import { DEEPGRAM_CLIENT } from "./deepgram.provider";

@Injectable()
export class DeepgramService implements IDeepgramService {
    constructor(
        @Inject(DEEPGRAM_CLIENT) private readonly deepgramClient: DeepgramClient,
    ) {}

    getClient() {
        return this.deepgramClient;
    }

    private getDefaultBatchOptions(options: BatchTranscriptionOptions): BatchTranscriptionOptions {
        return {
            model: '',
            smart_format: true,
            punctuate: true,
            ...options
        }
    }

    private getDefaultRealTimeOptions(options: RealTimeTranscriptionOptions): RealTimeTranscriptionOptions {
        return {
            model: '',
            smart_format: true,
            punctuate: true,
            ...options
        }
    }
    
    getSupportedFormats(): string[] {
        return [
            'wav', 'mp3', 'mp4', 'm4a', 'ogg', 'webm', 'flac', 
            'aiff', 'aac', 'amr', 'opus'
        ];
    }

    validateAudioBuffer(audioBuffer: Buffer): boolean {
        if (!audioBuffer || audioBuffer.length === 0) throw new Error('Audio buffer is empty'); 

        if (audioBuffer.length > 100 * 1024 * 1024) throw new Error('Audio file too large. Maximum size is 100MB'); // 100MB limit

        return true;
    }

    createRealtimeConnection(options?: RealTimeTranscriptionOptions, events?: RealTimeTranscriptionEvents): IRealTimeConnection {
        const connectionOptions = this.getDefaultRealTimeOptions(options || {});
        const connection = this.deepgramClient.listen.live(connectionOptions);

        if (events?.onOpen) {
            connection.addListener('open', events.onOpen);
        }

        if (events?.onTranscript) {
            connection.addListener('transcriptReceived', (data: any) => {
                events.onTranscript!(data as RealTimeTranscriptionResult);
            });
        }

        if (events?.onError) {
            connection.addListener('error', events.onError);
        }

        if (events?.onClose) {
            connection.addListener('close', events.onClose);
        }

        if (events?.onUtteranceEnd) {
            connection.addListener('utterance_end', events.onUtteranceEnd);
        }

        throw new Error("Method not implemented.");
    }

    transcribeAudio(audioBuffer: Buffer, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult> {
        throw new Error("Method not implemented.");
    }

    transcribeAudioUrl(audioUrl: string, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult> {
        throw new Error("Method not implemented.");
    }

    transcribeAudioStream(stream: NodeJS.ReadableStream, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult> {
        throw new Error("Method not implemented.");
    }

    transcribeStream(stream: NodeJS.ReadableStream, options?: RealTimeTranscriptionOptions): Promise<BatchTranscriptionResult> {
        throw new Error("Method not implemented.");
    }
}