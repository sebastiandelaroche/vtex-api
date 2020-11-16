import { EntityRepository, MongoRepository } from 'typeorm';
import { State } from '../entities/State';

@EntityRepository(State)
export class StateRepository extends MongoRepository<State> { }
