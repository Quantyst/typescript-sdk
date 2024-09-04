import { ProcessingStatus } from './types';

export interface QuantystParams {
  apiKey: string;
  baseUrl?: string;
}

export type AudioIndex = {
    name?: string | undefined;
    description?: string | undefined;
    processingStatus?: ProcessingStatus | undefined;
    id?: string | undefined;
    accountId?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
};