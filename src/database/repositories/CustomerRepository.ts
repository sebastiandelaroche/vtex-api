import { EntityRepository, MongoRepository } from 'typeorm';
import { Customer } from '../entities/Customer';

@EntityRepository(Customer)
export class CustomerRepository extends MongoRepository<Customer> { }
