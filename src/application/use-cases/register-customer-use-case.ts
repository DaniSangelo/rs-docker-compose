import { Customer } from 'src/domain/entities/customer';
import { ICustomerRepository } from 'src/domain/repositories/interfaces/customer-repository';
import { IHashGenerator } from 'src/domain/cryptography/interfaces/hash-generator';

interface RegisterCustomerUseCaseRequest {
  email: string;
  password: string;
  name: string;
}

export class RegisterCustomerUseCase {
  constructor(
    private readonly customerRepository: ICustomerRepository,
    private readonly hashGenerator: IHashGenerator,
  ) {}

  async execute({
    email,
    password,
    name,
  }: RegisterCustomerUseCaseRequest): Promise<void> {
    const customerExists =
      await this.customerRepository.getCustomerByEmail(email);

    if (customerExists) {
      throw new Error('Customer already exists');
    }

    const hashedPassword = await this.hashGenerator.hash(password);
    const customer = Customer.create(name, email, hashedPassword);

    await this.customerRepository.create(customer);
  }
}
