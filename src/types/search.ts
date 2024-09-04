import { AudioTranscript } from "./transcripts";

export type SearchTranscriptsByAccountRequest = {
    /**
     * The search query
     */
    query: string;
  };
  
  export type SearchTranscriptsResponse = {
    results?: Array<AudioTranscript> | undefined;
  };
  
  export interface SearchTranscriptsByIndexRequest
    extends SearchTranscriptsByAccountRequest {
    indexId: string;
  }
  