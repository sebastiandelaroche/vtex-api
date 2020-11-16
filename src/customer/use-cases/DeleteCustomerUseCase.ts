import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { ObjectID } from 'typeorm';

import { CustomerRepository } from '@database/repositories/CustomerRepository';
import { throwErrorIfEmptyOrNil } from '@core/utils';
import { DoesNotExistException } from '@core/exceptions';

@Injectable()
export class DeleteCustomerUseCase implements UseCase<ObjectID, Promise<void>> {

  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  async execute(id: ObjectID): Promise<void> {
    const validateCustomer = throwErrorIfEmptyOrNil(
      new DoesNotExistException('The customer does not exist.')
    );

    const currentCustomer = await this.customerRepository
      .findOne({ id })
      .then(validateCustomer);

    await this.customerRepository.remove(currentCustomer);
  }

}
