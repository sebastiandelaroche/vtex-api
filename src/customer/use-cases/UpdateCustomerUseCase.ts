import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { ObjectId } from 'mongodb';
import * as R from 'ramda';

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
      .findOne({ _id: new ObjectId(data.id) } as any)
      .then(validateCustomer);

    const customerDataUpdate = { ...currentCustomer, ...R.omit(['id'], data) };

    await this.customerRepository.updateOne(
      { _id: new ObjectId(data.id) },
      { $set: customerDataUpdate }
    );

    return customerDataUpdate as unknown as CustomerDto;
  }

}
