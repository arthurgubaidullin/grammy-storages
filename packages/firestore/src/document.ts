export interface Document<Value> {
  v?: Value;
}

export const createDocument = <Value>(value: Value): Document<Value> => {
  const doc: Document<Value> = {
    v: value,
  };
  return doc;
};

export const getDocumentValue = <Value>(
  document: Document<Value>
): Value | undefined => {
  return document?.['v'];
};
