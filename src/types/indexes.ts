import { ProcessingStatus } from './types';

export interface AudioIndex {
  name?: string | undefined;
  description?: string | undefined;
  processingStatus?: ProcessingStatus | undefined;
  id?: string | undefined;
  accountId?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface GetAudioIndexesResponse {
  results?: Array<AudioIndex> | undefined;
}

export interface GetAudioIndexRequest {
  indexId: string;
}

export interface CreateAudioIndexRequest {
  name: string;
  description?: string | undefined;
}

export interface UpdateAudioIndexRequest extends CreateAudioIndexRequest {
  indexId: string;
}

export interface DeleteAudioIndexRequest {
  indexId: string;
}
