export interface AudioMessage {
  accountId?: string | undefined;
  indexId?: string | undefined;
  id?: string | undefined;
  prompt?: string | undefined;
  response?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface GetMessagesRequest {
  indexId: string;
}

export interface GetMessagesResponse {
  results?: Array<AudioMessage> | undefined;
}

export interface GenerateMessageRequest {
  indexId: string;
  prompt: string;
}
