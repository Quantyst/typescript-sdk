import { BaseService } from '../base';
import {
  AudioMessage,
  GenerateMessageRequest,
  GetMessagesResponse,
  GetMessagesRequest,
} from '../types';

export class Messages extends BaseService {
  constructor(params: any) {
    super(params);
  }

  /**
   * Get Messages
   */
  async getAll(
    params: GetMessagesRequest
  ): Promise<GetMessagesResponse> {
    const url = this.buildUrl('audio/indexes/{index_id}/messages', {
      index_id: params.indexId,
    });
    return this.fetchJson(url);
  }

  /**
   * Create Message
   *
   * @remarks
   * Ask a question or define a task using all the transcripts in your index as context.
   */
  async generate(params: GenerateMessageRequest): Promise<AudioMessage> {
    const url = this.buildUrl('audio/indexes/{index_id}/messages', {
      index_id: params.indexId,
    });
    return this.fetchJson(url, {
      method: 'POST',
      body: { prompt: params.prompt },
    });
  }
}
