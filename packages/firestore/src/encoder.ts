export interface Encoder<A, B> {
  readonly encode: (value: A) => B;
  readonly decode: (encodedValue: B) => A;
}
