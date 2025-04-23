import { Customer } from 'src/domain/entities/customer';
import { ICustomerRepository } from 'src/domain/repositories/interfaces/customer-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCustomerRepository implements ICustomerRepository {
  constructor(private prismaService: PrismaService) {}

  async create(customer: Customer): Promise<void> {
    await this.prismaService.customer.create({
      data: {
        id: customer.getId(),
        name: customer.getName(),
        email: customer.getEmail(),
        password: customer.getPassword(),
      },
    });
  }

  async getCustomerByEmail(email: string): Promise<Customer | null> {
    const dbCustomer = await this.prismaService.customer.findUnique({
      where: {
        email,
      },
    });

    return dbCustomer
      ? Customer.create(
          dbCustomer.name,
          dbCustomer.email,
          dbCustomer.password,
          dbCustomer.id,
        )
      : null;
  }
}
