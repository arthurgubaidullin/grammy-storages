import { TextDecoder, TextEncoder } from 'node:util';
import { Encoder } from './encoder';
import { getStringEncoder } from './string-encoder';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const getBinaryEncoder = <T>(): Encoder<T, Uint8Array> => {
  const stringEncoder = getStringEncoder<T>();
  const encode = (value: T) => {
    const str = stringEncoder.encode(value);
    const encoded = encoder.encode(str);
    return encoded;
  };
  const decode = (encoded: Uint8Array): T => {
    const value = decoder.decode(encoded);
    return stringEncoder.decode(value);
  };
  return {
    encode,
    decode,
  };
};
