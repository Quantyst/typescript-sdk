import { ProcessingStatus } from './types';

/**
 * Audio Transcript
 */
export type Chapters = {
    gist?: string | undefined;
    headline?: string | undefined;
    summary?: string | undefined;
  };
  
  export type Entities = {
    text: string;
    entityType: string;
  };
  
  export type Summary = {};
  
  export type Categories = {
    summary: Summary;
  };
  
  export type Results = {
    rank?: number | undefined;
    text?: string | undefined;
  };
  
  export type Highlights = {
    results?: Array<Results> | undefined;
  };
  
  export type Words = {
    text?: string | undefined;
    start?: number | undefined;
    end?: number | undefined;
    speaker?: string | undefined;
  };
  
  export type Utterances = {
    text?: string | undefined;
    words?: Array<Words> | undefined;
  };
  
  export type SentimentAnalysis = {
    end?: number | undefined;
    start?: number | undefined;
    speaker?: string | undefined;
    text?: string | undefined;
    sentiment?: string | undefined;
  };

export type Transcript = {
    text?: string | undefined;
    chapters?: Array<Chapters> | undefined;
    entities?: Array<Entities> | undefined;
    categories?: Categories | undefined;
    highlights?: Highlights | undefined;
    utterances?: Array<Utterances> | undefined;
    audioDuration?: number | undefined;
    sentimentAnalysis?: Array<SentimentAnalysis> | undefined;
  };

/**
 * Audio Transcript
 */
export type AudioTranscript = {
    name?: string | undefined;
    id?: string | undefined;
    indexId?: string | undefined;
    accountId?: string | undefined;
    processingStatus?: ProcessingStatus | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    fileId?: string | undefined;
    fileUrl?: string | undefined;
    /**
     * URL for your webhook to be notified when the transcript is ready
     */
    webhookUrl?: string | undefined;
    /**
     * Optional auth header key to verify webhook request
     */
    webhookAuthHeaderKey?: string | undefined;
    /**
     * Optional auth header value
     */
    webhookAuthHeaderValue?: string | undefined;
    transcript?: Transcript | undefined;
  };
  
  
export type CreateAudioTranscriptRequest = {
    /**
     * The url of the audio file
     */
    fileUrl: string;
    indexId: string;
    /**
     * Name of transcript. (Defaults to file name)
     */
    name?: string | undefined;
    /**
     * URL for your webhook to be notified when the transcript is ready
     */
    webhookUrl?: string | undefined;
    /**
     * Optional auth header key to verify webhook request
     */
    webhookAuthHeaderKey?: string | undefined;
    /**
     * Optional auth header value
     */
    webhookAuthHeaderValue?: string | undefined;
  };
  /** @internal */
  export type CreateAudioTranscriptRequest$Internal = {
    file_url: string;
    index_id: string;
    name?: string | undefined;
    webhook_url?: string | undefined;
    webhook_auth_header_key?: string | undefined;
    webhook_auth_header_value?: string | undefined;
  };
  
  export type GetAudioTranscriptsRequest = {
    /**
     * Setting the index_id param will return a list of transcripts associated with the Index. Not setting this param will return all transcripts associated with your account.
     */
    indexId?: string | undefined;
  };
  
  export type GetAudioTranscriptsResponse = {
    results?: Array<AudioTranscript> | undefined;
  };
  
  export type GetAudioTranscriptRequest = {
    transcriptId: string;
  };
  