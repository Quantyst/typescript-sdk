export type WordTrigger = {
  name?: string | undefined;
  indexId?: string | undefined;
  id?: string | undefined;
  accountId?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  wordList?: Array<string> | undefined;
  /**
   * URL for your webhook to be notified when a transcript contains a word in the word_list
   */
  webhookUrl?: string | undefined;
  /**
   * Optional auth header key to verify webhook request
   */
  webhookAuthHeaderKey?: string | undefined;
  /**
   * Optional auth header value
   */
  webhookAuthHeaderValue?: string | undefined;
};

export type Output = {
  text?: string | undefined;
  start?: number | undefined;
  end?: number | undefined;
};

/**
 * Word Trigger Output
 */
export type WordTriggerOutput = {
  id?: string | undefined;
  accountId?: string | undefined;
  indexId?: string | undefined;
  transcriptId?: string | undefined;
  triggerId?: string | undefined;
  output?: Array<Output> | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

export type CreateWordTriggerRequest = {
  /**
   * The list of words that get checked when a transcript is processed
   */
  wordList: Array<string>;
  /**
   * ID Of the Audio Index the word trigger is associated with
   */
  indexId: string;
  /**
   * Optional name of trigger
   */
  name?: string | undefined;
  /**
   * URL for your webhook to be notified when a transcript contains one or more words in your defined word_list
   */
  webhookUrl?: string | undefined;
  /**
   * Optional auth header key to verify webhook request
   */
  webhookAuthHeaderKey?: string | undefined;
  /**
   * Optional auth header value
   */
  webhookAuthHeaderValue?: string | undefined;
};

/** @internal */
export type CreateWordTriggerRequest$Internal = {
  word_list: Array<string>;
  index_id: string;
  name?: string | undefined;
  webhook_url?: string | undefined;
  webhook_auth_header_key?: string | undefined;
  webhook_auth_header_value?: string | undefined;
};

export type GetWordTriggersRequest = {
  /**
   * Setting the index_id param will return a list of word triggers associated with the Index. Not setting this param will return all word triggers associated with your account.
   */
  indexId?: string | undefined;
};

export type GetWordTriggersResponse = {
  results?: Array<WordTrigger> | undefined;
};

export type GetWordTriggerRequest = {
  triggerId: string;
};

export type UpdateWordTriggerRequest = {
  triggerId: string;
  /**
   * The list of words that get checked when a transcript is processed
   */
  wordList?: Array<string> | undefined;
  /**
   * ID Of the Audio Index the word trigger is associated with
   */
  indexId?: string;
  /**
   * Optional name of trigger
   */
  name?: string | undefined;
  /**
   * URL for your webhook to be notified when a transcript contains one or more words in your defined word_list
   */
  webhookUrl?: string | undefined;
  /**
   * Optional auth header key to verify webhook request
   */
  webhookAuthHeaderKey?: string | undefined;
  /**
   * Optional auth header value
   */
  webhookAuthHeaderValue?: string | undefined;
};
export type UpdateWordTriggerRequest$Internal = {
  word_list?: Array<string>;
  index_id?: string;
  name?: string | undefined;
  webhook_url?: string | undefined;
  webhook_auth_header_key?: string | undefined;
  webhook_auth_header_value?: string | undefined;
};

export type GetWordTriggerOutputResponse = {
  results?: Array<WordTriggerOutput> | undefined;
};
