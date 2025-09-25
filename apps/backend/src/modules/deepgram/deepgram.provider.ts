// deepgram/deepgram.providers.ts
import { ConfigService } from '@nestjs/config';
import { createClient } from '@deepgram/sdk';

export const DEEPGRAM_CLIENT = 'DEEPGRAM_CLIENT';

export const deepgramProvider = {
  provide: DEEPGRAM_CLIENT,
  useFactory: (configService: ConfigService) => {
    const apiKey = configService.get<string>('DEEPGRAM_API_KEY');
    return createClient(apiKey);
  },
  inject: [ConfigService],
};