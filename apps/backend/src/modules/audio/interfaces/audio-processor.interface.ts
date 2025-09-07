export interface IAudioProcessor {
    processAudio(audioInput: any): Promise<{ transcription: string }>;
}