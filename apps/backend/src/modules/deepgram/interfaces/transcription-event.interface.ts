import { RealTimeTranscriptionResult } from "./transcription-result.interface";

export interface RealTimeTranscriptionEvents {
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Error) => void;
  onTranscript?: (result: RealTimeTranscriptionResult) => void;
  onUtteranceEnd?: (utterance: any) => void;
  onMetadata?: (metadata: any) => void;
}