import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { CustomerRepository } from '@database/repositories/CustomerRepository';
import { CreateCustomerDto } from '../dtos/CreateCustomerDto';
import { CustomerDto } from '../dtos/CustomerDto';

@Injectable()
export class CreateCustomerUseCase implements UseCase<CreateCustomerDto, Promise<CustomerDto>> {

  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  execute(data?: CreateCustomerDto): Promise<CustomerDto> {
    return this.customerRepository
      .save(data as any) as unknown as Promise<CustomerDto>;
  }

}
