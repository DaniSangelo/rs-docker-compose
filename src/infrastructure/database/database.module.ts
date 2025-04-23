import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ICUSTOMER_REPOSITORY } from 'src/domain/repositories/interfaces/customer-repository';
import { PrismaCustomerRepository } from './prisma/repositories/prisma-customer-repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: ICUSTOMER_REPOSITORY,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [PrismaService, ICUSTOMER_REPOSITORY],
})
export class DatabaseModule {}
