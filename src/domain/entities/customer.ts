import { randomUUID } from 'node:crypto';
import { Email } from '../vo/email';

export class Customer {
  private name: string;
  private email: Email;
  private password: string;

  private constructor(
    name: string,
    email: string,
    password: string,
    readonly id: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = Email.fromString(email);
    this.password = password;
  }

  public static create(
    name: string,
    email: string,
    password: string,
    id?: string,
  ) {
    return new Customer(name, email, password, id ?? randomUUID());
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email.toString();
  }

  public getPassword(): string {
    return this.password;
  }
}
