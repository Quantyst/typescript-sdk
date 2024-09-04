import * as components from './components';

export interface GetAudioIndexesResponse {
  results?: Array<components.AudioIndex> | undefined;
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

export interface GetMessagesRequest {
  indexId: string;
}

export interface GetMessagesResponse {
  results?: Array<components.AudioMessage> | undefined;
}

export interface GenerateMessageRequest {
  indexId: string;
  prompt: string;
}
