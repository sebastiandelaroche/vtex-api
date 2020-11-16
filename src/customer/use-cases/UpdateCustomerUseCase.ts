import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { CustomerRepository } from '@database/repositories/CustomerRepository';
import { UpdateCustomerDto } from '../dtos/UpdateCustomerDto';
import { CustomerDto } from '../dtos/CustomerDto';
import { throwErrorIfEmptyOrNil } from '@core/utils';
import { DoesNotExistException } from '@core/exceptions';

@Injectable()
export class UpdateCustomerUseCase implements UseCase<UpdateCustomerDto, Promise<CustomerDto>> {

  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  async execute(data: UpdateCustomerDto): Promise<CustomerDto> {
    const validateCustomer = throwErrorIfEmptyOrNil(
      new DoesNotExistException('The customer does not exist.')
    );

    const currentCustomer = await this.customerRepository
      .findOne({ id: data.id })
      .then(validateCustomer);

    return this.customerRepository.save({
      ...currentCustomer, ...data
    } as any) as unknown as Promise<CustomerDto>;
  }

}
