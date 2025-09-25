export interface TranscriptionWord {
  word: string;
  start: number;
  end: number;
  confidence: number;
  speaker?: number;
}

export interface TranscriptionAlternative {
  transcript: string;
  confidence: number;
  words: TranscriptionWord[];
}

export interface TranscriptionChannel {
  alternatives: TranscriptionAlternative[];
  detected_language?: string;
}

export interface BatchTranscriptionResult {
  metadata: {
    request_id: string;
    created: string;
    duration: number;
    channels: number;
  };
  results: {
    channels: TranscriptionChannel[];
    utterances?: any[];
  };
}

export interface RealTimeTranscriptionResult {
  channel_index: number[];
  duration: number;
  start: number;
  is_final: boolean;
  speech_final: boolean;
  channel: TranscriptionChannel;
}