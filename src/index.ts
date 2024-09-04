import { QuantystParams } from './types';
import { Indexes } from './services/indexes';

export class Quantyst {
  public indexes;

  constructor(params: QuantystParams) {
    params.baseUrl = 'https://app.quantyst.com/api/v1/';
    this.indexes = new Indexes(params);
  }
}
