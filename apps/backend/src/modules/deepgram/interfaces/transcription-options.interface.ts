import { LiveSchema, PrerecordedSchema } from "@deepgram/sdk";

export type BatchTranscriptionOptions = Partial<PrerecordedSchema>;

export type RealTimeTranscriptionOptions = Partial<LiveSchema> ;