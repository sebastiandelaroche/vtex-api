import { EntityRepository, MongoRepository } from 'typeorm';
import { Salesperson } from '../entities/Salesperson';

@EntityRepository(Salesperson)
export class SalespersonRepository extends MongoRepository<Salesperson> { }

