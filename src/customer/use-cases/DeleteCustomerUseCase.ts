import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { ObjectID } from 'typeorm';
import { ObjectId } from 'mongodb';

import { CustomerRepository } from '@database/repositories/CustomerRepository';
import { throwErrorIfEmptyOrNil } from '@core/utils';
import { DoesNotExistException } from '@core/exceptions';

@Injectable()
export class DeleteCustomerUseCase implements UseCase<ObjectID, Promise<ObjectID>> {

  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  async execute(id: ObjectID | string): Promise<ObjectID> {
    const validateCustomer = throwErrorIfEmptyOrNil(
      new DoesNotExistException('The customer does not exist.')
    );

    const currentCustomer = await this.customerRepository
      .findOne({ _id: new ObjectId(id) } as any)
      .then(validateCustomer);

    await this.customerRepository.delete(currentCustomer.id);

    return currentCustomer.id;
  }

}
