import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RegisterCustomerController } from './controllers/register-customer.controller';
import { PrismaService } from '../database/prisma/prisma.service';
import { RegisterCustomerUseCaseAdapter } from '../use-case-adapter/register-customer-use-case-adapter';
import { CryptographyModule } from '../cryptography/cryptography.module';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [RegisterCustomerController],
  providers: [PrismaService, RegisterCustomerUseCaseAdapter],
})
export class HttpModule {}
