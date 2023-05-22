import { createAdapter } from './adapter';
import { getBinaryEncoder } from './binary-encoder';

export const adapter = createAdapter(getBinaryEncoder());