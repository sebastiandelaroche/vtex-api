import { EntityRepository, MongoRepository } from 'typeorm';
import { City } from '../entities/City';

@EntityRepository(City)
export class CityRepository extends MongoRepository<City> { }
