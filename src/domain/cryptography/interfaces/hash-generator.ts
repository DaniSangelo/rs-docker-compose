export const IHASH_GENERATOR = Symbol('HASH_GENERATOR')

export interface IHashGenerator {
  hash(text: string): Promise<string>;
  compare(text: string, hash: string): Promise<boolean>;
}
