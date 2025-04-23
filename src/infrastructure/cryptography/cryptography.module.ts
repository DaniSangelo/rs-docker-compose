import { Module } from '@nestjs/common';
import { BCryptHasher } from './bcrypt-hasher';
import { IHASH_GENERATOR } from 'src/domain/cryptography/interfaces/hash-generator';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: IHASH_GENERATOR,
      useClass: BCryptHasher,
    },
  ],
  exports: [IHASH_GENERATOR],
})
export class CryptographyModule {}
