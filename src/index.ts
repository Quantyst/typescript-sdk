import { QuantystParams } from './types';
import { Indexes } from './services/indexes';
import { Messages } from './services/messages';
import { Transcripts } from './services/transcripts';
import { Search } from './services/search';
import { Triggers } from './services/triggers';

export class Quantyst {
  public indexes;
  public messages;
  public transcripts;
  public search;
  public triggers;

  constructor(params: QuantystParams) {
    params.baseUrl = 'https://app.quantyst.com/api/v1/';
    this.indexes = new Indexes(params);
    this.messages = new Messages(params);
    this.transcripts = new Transcripts(params);
    this.search = new Search(params);
    this.triggers = new Triggers(params);
  }
}
