import { Indexes } from './indexes';

export class Quantyst {
  public indexes;

  constructor(params: any) {
    params.baseUrl = 'https://app.quantyst.com/api/v1/';
    this.indexes = new Indexes(params);
  }
}
