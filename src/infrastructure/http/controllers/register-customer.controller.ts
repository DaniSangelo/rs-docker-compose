import { Body, Controller, Post } from '@nestjs/common';
import { RegisterCustomerUseCaseAdapter } from 'src/infrastructure/use-case-adapter/register-customer-use-case-adapter';
import { z } from 'zod';

const registerCustomerRequest = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
});

type RegisterCustomerSchema = z.infer<typeof registerCustomerRequest>;

@Controller()
export class RegisterCustomerController {
  constructor(
    private readonly registerCustomerUseCase: RegisterCustomerUseCaseAdapter,
  ) {}

  @Post()
  async registerCustomer(@Body() body: RegisterCustomerSchema) {
    return await this.registerCustomerUseCase.execute(body);
  }
}
