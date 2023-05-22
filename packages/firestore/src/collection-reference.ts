interface DocumentSnapshot<T> {
  readonly data: () => T | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WriteResult {}

interface DocumentReference<T> {
  readonly get: () => Promise<DocumentSnapshot<T>>;
  readonly set: <R>(data: T) => Promise<R>;
  readonly delete: () => Promise<WriteResult>;
}

export interface CollectionReference<T> {
  readonly doc: (documentPath: string) => DocumentReference<T>;
}
