// deepgram/deepgram.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeepgramService } from './deepgram.service';
import { DEEPGRAM_CLIENT, deepgramProvider } from './deepgram.provider';

@Module({
  imports: [ConfigModule],
  providers: [
    deepgramProvider, 
    DeepgramService
  ],
  exports: [
    DEEPGRAM_CLIENT,
    DeepgramService
  ],
})
export class DeepgramModule {}