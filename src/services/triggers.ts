import { BaseService } from '../base';
import {
  WordTrigger,
  CreateWordTriggerRequest,
  CreateWordTriggerRequest$Internal,
  GetWordTriggersRequest,
  GetWordTriggersResponse,
  GetWordTriggerRequest,
  UpdateWordTriggerRequest,
  UpdateWordTriggerRequest$Internal,
  GetWordTriggerOutputResponse,
} from '../types';

export class Triggers extends BaseService {
  private path: string;
  constructor(params: any) {
    super(params);
    this.path = 'audio/word-triggers/';
  }

  /**
   * Create Word Trigger
   *
   * @remarks
   * Creates a word trigger.
   *
   *  When a transcript is created and it contains a word in your trigger's `word_list`, the instance of the word and the timestamp it can be found at in the audio file gets saved.
   *
   *  **Output**
   *
   *  The trigger's output can be viewed by making a request to the  `word-triggers/output endpoint`.
   *
   *  **Webhook**
   *
   *  In the body of the trigger request, set the webhook fields so Quantyst's server will call your webhook endpoint when a transcript contains one or more of your trigger words.
   *
   *
   */
  async create(params: CreateWordTriggerRequest): Promise<WordTrigger> {
    const body: CreateWordTriggerRequest$Internal = {
      word_list: params.wordList,
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
   * Get Word Triggers
   */
  async getWordTriggers(
    params: GetWordTriggersRequest
  ): Promise<GetWordTriggersResponse> {
    const url = params?.indexId
      ? this.buildUrl(this.path + '?index_id={index_id}', {
          index_id: params.indexId,
        })
      : this.path;
    return this.fetchJson(url);
  }

  /**
   * Get Word Trigger
   */
  async getWordTrigger(params: GetWordTriggerRequest): Promise<WordTrigger> {
    const url = this.buildUrl(this.path + '{trigger_id}', {
      trigger_id: params.triggerId,
    });
    return this.fetchJson(url);
  }

  /**
   * Update Word Trigger
   */
  async update(params: UpdateWordTriggerRequest): Promise<WordTrigger> {
    const body: UpdateWordTriggerRequest$Internal = {};
    if (params.wordList) body.word_list = params.wordList;
    if (params.indexId) body.index_id = params.indexId;
    if (params.name) body.name = params.name;
    if (params.webhookUrl) body.webhook_url = params.webhookUrl;
    if (params.webhookAuthHeaderKey)
      body.webhook_auth_header_key = params.webhookAuthHeaderKey;
    if (params.webhookAuthHeaderValue)
      body.webhook_auth_header_value = params.webhookAuthHeaderValue;
    return this.fetchJson(this.path, { method: 'PATCH', body });
  }

  /**
   * Get Word Trigger Output
   */
  async getOutput(
    params: GetWordTriggerRequest
  ): Promise<GetWordTriggerOutputResponse> {
    const url = this.buildUrl(this.path + '{trigger_id}/output/', {
      trigger_id: params.triggerId,
    });
    return this.fetchJson(url);
  }
}
