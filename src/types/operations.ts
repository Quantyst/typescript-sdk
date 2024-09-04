export interface GetIndexes {
    indexIds: string[]
}
export interface UpdateIndex {
  indexId: string;
  name?: string;
  description?: string;
}
