export interface TranscriptionBaseOptions {
  model?: string;
  language?: string;
  smart_format?: boolean;
  punctuate?: boolean;
  paragraphs?: boolean;
  diarize?: boolean;
  ner?: boolean;
  numbers?: boolean;
  profanity_filter?: boolean;
  redact?: boolean;
}

export interface BatchTranscriptionOptions extends TranscriptionBaseOptions {
  utterances?: boolean;
  detect_language?: boolean;
  summarize?: boolean;
  topics?: boolean;
  sentiment?: boolean;
}

export interface RealTimeTranscriptionOptions extends TranscriptionBaseOptions {
  interim_results?: boolean;
  endpointing?: number;
  vad_events?: boolean;
  encoding?: string;
  sample_rate?: number;
  channels?: number;
}