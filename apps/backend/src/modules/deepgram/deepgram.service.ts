// deepgram/deepgram.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { DeepgramClient } from '@deepgram/sdk';
import { DEEPGRAM_CLIENT } from './deepgram.provider';

@Injectable()
export class DeepgramService {
  constructor(
    @Inject(DEEPGRAM_CLIENT) private readonly deepgram: DeepgramClient,
  ) {}

  getClient(): DeepgramClient {
    return this.deepgram;
  }

  // Example method for transcribing audio
  async transcribeAudio(audioBuffer: Buffer, options?: any) {
    try {
      const { result, error } = await this.deepgram.listen.prerecorded.transcribeFile(
        audioBuffer,
        options || {
          model: 'nova-2',
          smart_format: true,
        }
      );

      if (error) throw error;
      return result;
    } catch (error) {
      throw new Error(`Deepgram transcription failed: ${error.message}`);
    }
  }

  // Example method for real-time transcription
  createLiveConnection(options?: any) {
    return this.deepgram.listen.live({
      model: 'nova-2',
      interim_results: true,
      punctuate: true,
      smart_format: true,
      ...options,
    });
  }
}