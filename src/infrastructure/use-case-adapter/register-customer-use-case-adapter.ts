import { Inject } from '@nestjs/common';
import { RegisterCustomerUseCase } from 'src/application/use-cases/register-customer-use-case';
import {
  ICUSTOMER_REPOSITORY,
  ICustomerRepository,
} from 'src/domain/repositories/interfaces/customer-repository';

import {
  IHASH_GENERATOR,
  IHashGenerator,
} from 'src/domain/cryptography/interfaces/hash-generator';

export class RegisterCustomerUseCaseAdapter extends RegisterCustomerUseCase {
  constructor(
    @Inject(ICUSTOMER_REPOSITORY)
    customerRepository: ICustomerRepository,
    @Inject(IHASH_GENERATOR)
    hashGenerator: IHashGenerator,
  ) {
    super(customerRepository, hashGenerator);
  }
}
