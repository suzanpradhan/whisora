import { RealTimeTranscriptionEvents } from "./transcription-event.interface";
import { BatchTranscriptionOptions, RealTimeTranscriptionOptions } from "./transcription-options.interface";
import { BatchTranscriptionResult } from "./transcription-result.interface";

export interface IDeepgramBatchService {
  transcribeAudio(audioBuffer: Buffer, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult>;
  transcribeAudioUrl(audioUrl: string, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult>;
  transcribeAudioStream(stream: NodeJS.ReadableStream, options?: BatchTranscriptionOptions): Promise<BatchTranscriptionResult>;
}

export interface IDeepgramRealTimeService {
  createRealtimeConnection(options?: RealTimeTranscriptionOptions, events?: RealTimeTranscriptionEvents): IRealTimeConnection;
  transcribeStream(stream: NodeJS.ReadableStream, options?: RealTimeTranscriptionOptions): Promise<BatchTranscriptionResult>;
}

export interface IRealTimeConnection {
  send(data: Buffer | ArrayBuffer): void;
  finish(): void;
  close(): void;
  addListener(event: string, callback: Function): void;
  removeListener(event: string, callback: Function): void;
}

export interface IDeepgramService extends IDeepgramBatchService, IDeepgramRealTimeService {
  getClient(): any; // Deepgram client instance
  validateAudioBuffer(audioBuffer: Buffer): boolean;
  getSupportedFormats(): string[];
}