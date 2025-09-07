import { IAudioProcessor } from "./interfaces/audio-processor.interface";

export class BatchAudioProcessor implements IAudioProcessor {
    async processAudio(audioInput: any): Promise<{ transcription: string; }> {
        // Dummy implementation for batch audio processing
        return { transcription: "Batch audio processed transcription" };
    }
}