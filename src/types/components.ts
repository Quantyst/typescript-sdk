import { ProcessingStatus } from './types';

export interface QuantystParams {
  apiKey: string;
  baseUrl?: string;
}

export interface AudioIndex {
  name?: string | undefined;
  description?: string | undefined;
  processingStatus?: ProcessingStatus | undefined;
  id?: string | undefined;
  accountId?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface AudioMessage {
  accountId?: string | undefined;
  indexId?: string | undefined;
  id?: string | undefined;
  prompt?: string | undefined;
  response?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}
