import { BaseService } from './base';
import {
    GetAudioIndexesResponse,
    GetAudioIndexRequest,
    CreateAudioIndexRequest,
    UpdateAudioIndexRequest,
    DeleteAudioIndexRequest,
  } from '../types/operations';
  import { AudioIndex } from '../types/components';

export class Indexes extends BaseService {
  path: string;
  constructor(params: any) {
    super(params);
    this.path = 'audio/indexes/';
  }
  /**
   * Get Audio Indexes
   *
   * @remarks
   * Returns a list of audio indexes for a given team
   */
  async getAll(): Promise<GetAudioIndexesResponse> {
    return this.fetchJson(this.path);
  }

  /**
   * Get Audio Index
   */
  async getIndexes(params: GetAudioIndexRequest): Promise<AudioIndex> {
    const url = this.buildUrl(this.path + '{index_id}', {
      index_id: params.indexId,
    });
    return this.fetchJson(url);
  }

  /**
   * Create Audio Index
   */
  async create(params: CreateAudioIndexRequest): Promise<AudioIndex> {
    return this.fetchJson(this.path, {
      method: 'POST',
      body: { name: params.name, description: params.description },
    });
  }

  /**
   * Update Audio Index
   */
  async update(params: UpdateAudioIndexRequest): Promise<AudioIndex> {
    const url = this.buildUrl(this.path + '{index_id}', {
      index_id: params.indexId,
    });
    return this.fetchJson(url, {
      method: 'PATCH',
      body: { name: params.name, description: params.description },
    });
  }

  /**
   * Delete Audio Index
   */
  async delete(params: DeleteAudioIndexRequest): Promise<null> {
    const url = this.buildUrl(this.path + '{index_id}', {
      index_id: params.indexId,
    });
    return this.fetchJson(url, { method: 'DELETE' });
  }
}
