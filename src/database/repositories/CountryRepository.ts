import { EntityRepository, MongoRepository } from 'typeorm';
import { Country } from '../entities/Country';

@EntityRepository(Country)
export class CountryRepository extends MongoRepository<Country> { }
