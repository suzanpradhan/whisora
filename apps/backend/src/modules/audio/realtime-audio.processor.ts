import { IAudioProcessor } from "./interfaces/audio-processor.interface";

export class RealtimeAudioProcessor implements IAudioProcessor {
    async processAudio(audioInput: any): Promise<{ transcription: string; }> {
        // Dummy implementation for real-time audio processing
        return { transcription: "Real-time audio processed transcription" };
    }
}