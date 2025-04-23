import { Customer } from 'src/domain/entities/customer';

export const ICUSTOMER_REPOSITORY = Symbol('ICustomerRepository');

export interface ICustomerRepository {
  getCustomerByEmail(email: string): Promise<Customer | null>;
  create(customer: Customer): Promise<void>;
}
