import { BaseService } from '../base';
import {
  AudioTranscript,
  CreateAudioTranscriptRequest$Internal,
  GetAudioTranscriptRequest,
  CreateAudioTranscriptRequest,
  GetAudioTranscriptsRequest,
  GetAudioTranscriptsResponse,
} from '../types';

// export class Transcripts extends BaseService {
export class Transcripts extends BaseService {
  path: string;
  constructor(params: any) {
    super(params);
    this.path = 'audio/transcripts/';
  }

  /**
   * Create Audio Transcript
   *
   * @remarks
   * Creates a transcript from your audio file.
   *
   *  Transcript creation can take anywhere from a few seconds to a few minutes depending on how large of an audio file you're sending.
   *
   *  To get the transcript when it is done, there are three options:
   *
   *  **Polling**
   *
   *  Call the transcript GET request until the transcript is returned with the `processing_status` value as `complete`.
   *
   *  **Webhook**
   *
   *  In the body of the request, set the webhook fields so Quantyst's server will call your webhook endpoint when the transcription is done.
   *
   *  **SDK**
   *
   *  The SDK has a built in waiting implementation, so calling the transcription method alone will return the finished transcript.
   */
  async create(
    params: CreateAudioTranscriptRequest
  ): Promise<AudioTranscript> {
    const body: CreateAudioTranscriptRequest$Internal = {
      file_url: params.fileUrl,
      index_id: params.indexId,
    };
    if (params.name) body.name = params.name;
    if (params.webhookUrl) body.webhook_url = params.webhookUrl;
    if (params.webhookAuthHeaderKey)
      body.webhook_auth_header_key = params.webhookAuthHeaderKey;
    if (params.webhookAuthHeaderValue)
      body.webhook_auth_header_value = params.webhookAuthHeaderValue;
    return this.fetchJson(this.path, { method: 'POST', body });
  }

  /**
   * Get Audio Transcripts
   */
  async getTranscripts(
    params: GetAudioTranscriptsRequest
  ): Promise<GetAudioTranscriptsResponse> {
    const url = params?.indexId
      ? this.buildUrl(this.path + '?index_id={index_id}', {
          index_id: params.indexId,
        })
      : this.path;
    return this.fetchJson(url);
  }

  /**
   * Get Audio Transcript
   */
  async getTranscript(
    params: GetAudioTranscriptRequest
  ): Promise<AudioTranscript> {
    const url = this.buildUrl(this.path + '{transcript_id}', {
      transcript_id: params.transcriptId,
    });
    return this.fetchJson(url);
  }
}
