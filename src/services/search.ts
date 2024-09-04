import { BaseService } from '../base';
import {
  SearchTranscriptsByAccountRequest,
  SearchTranscriptsResponse,
  SearchTranscriptsByIndexRequest,
} from '../types';

export class Search extends BaseService {
  constructor(params: any) {
    super(params);
  }

  /**
   * Search Transcripts by Account
   *
   * @remarks
   * Search for all transcripts in your account by word, keyword, or context.
   */
  async searchTranscriptsByAccount(
    params: SearchTranscriptsByAccountRequest
  ): Promise<SearchTranscriptsResponse> {
    const url = this.buildUrl('audio/indexes/search/?query={query}', {
      query: params.query,
    });
    return this.fetchJson(url);
  }

  /**
   * Search Transcripts by Index
   *
   * @remarks
   * Search for transcripts in an index by word, keyword, or context.
   */
  async searchTranscriptsByIndex(
    params: SearchTranscriptsByIndexRequest
  ): Promise<SearchTranscriptsResponse> {
    const url = this.buildUrl(
      'audio/indexes/{index_id}/search/?query={query}',
      {
        index_id: params.indexId,
        query: params.query,
      }
    );
    return this.fetchJson(url);
  }
}
