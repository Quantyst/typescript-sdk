import * as components from './components';
export type GetAudioIndexesResponse = {
    results?: Array<components.AudioIndex> | undefined;
};
export type GetAudioIndexRequest = {
    indexId: string;
};
export type CreateAudioIndexRequest = {
    name: string;
    description?: string | undefined;
};
export interface UpdateAudioIndexRequest extends CreateAudioIndexRequest {
    indexId: string;
}
export type DeleteAudioIndexRequest = {
    indexId: string;
};
export type GetMessagesRequest = {
    indexId: string;
  };
  
  export type GetMessagesResponse = {
    results?: Array<components.AudioMessage> | undefined;
  };
  
  export type GenerateMessageRequest = {
    indexId: string;
    prompt: string;
  };