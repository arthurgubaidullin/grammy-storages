export interface Storage<T> {
  readonly read: (key: string) => Promise<T | undefined>;
  readonly write: (key: string, value: T) => Promise<void>;
  readonly delete: (key: string) => Promise<void>;
}
