import { IHashGenerator } from 'src/domain/cryptography/interfaces/hash-generator';
import { compare, hash } from 'bcryptjs';

export class BCryptHasher implements IHashGenerator {
  private HASH_SALT = 10;

  async hash(text: string): Promise<string> {
    return await hash(text, this.HASH_SALT);
  }

  async compare(text: string, hash: string): Promise<boolean> {
    return await compare(text, hash);
  }
}
