import { CollectionReference } from './collection-reference';
import { Document, createDocument, getDocumentValue } from './document';
import { Encoder } from './encoder';
import { Storage } from './storage';

export const createAdapter =
    <A, B>(encoder: Encoder<A, B>) =>
      (collection: CollectionReference<Document<B>>): Storage<A> => {
        return {
          read: async (key: string) => {
            const snapshot = await collection.doc(key).get();
            const document = snapshot.data();
            if (!document) {
              return undefined;
            }
            const encoded = getDocumentValue(document);
            if (!encoded) {
              return undefined;
            }
            return encoder.decode(encoded);
          },
          write: async (key: string, value: A) => {
            const encoded = encoder.encode(value);
            const doc: Document<B> = createDocument(encoded);
            await collection.doc(key).set(doc);
          },
          delete: async (key: string) => {
            await collection.doc(key).delete();
          },
        };
      };
