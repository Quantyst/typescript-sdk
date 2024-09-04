export type ClosedEnum<T> = T[keyof T];

export const ProcessingStatus = {
  Completed: "completed",
  Pending: "pending",
  Stopped: "stopped",
  Error: "error",
} as const;

export type ProcessingStatus = ClosedEnum<typeof ProcessingStatus>;

export type BaseParams = {
  apiKey: string;
  baseUrl?: string;
};

export type BuildUrlParams = Partial<Record<string, string | number>>;

export interface QuantystParams {
  apiKey: string;
  baseUrl?: string;
}