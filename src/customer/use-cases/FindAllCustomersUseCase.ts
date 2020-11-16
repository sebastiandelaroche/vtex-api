import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { CustomerDto } from '../dtos/CustomerDto';
import { CustomerRepository } from '@database/repositories/CustomerRepository';

@Injectable()
export class FindAllCustomersUseCase implements UseCase<void, Promise<CustomerDto[]>> {

  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  execute(): Promise<CustomerDto[]> {
    return this.customerRepository
      .find() as unknown as Promise<CustomerDto[]>;
  }
}
