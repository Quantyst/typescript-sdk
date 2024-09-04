import { QuantystParams } from './types';
import { Indexes } from './services/indexes';
import { Messages } from './services/messages';

export class Quantyst {
  public indexes;
  public messages;

  constructor(params: QuantystParams) {
    params.baseUrl = 'https://app.quantyst.com/api/v1/';
    this.indexes = new Indexes(params);
    this.messages = new Messages(params);
  }
}
