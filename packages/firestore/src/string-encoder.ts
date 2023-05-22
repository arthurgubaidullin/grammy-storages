import { Encoder } from './encoder';

export const getStringEncoder = <T>(): Encoder<T, string> => {
  return {
    encode: (v) => JSON.stringify(v),
    decode: (e) => JSON.parse(e),
  };
};
