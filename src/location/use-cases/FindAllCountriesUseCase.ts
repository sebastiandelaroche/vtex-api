import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { CountryDto } from '../dtos/CountryDto';
import { CountryRepository } from '@database/repositories/CountryRepository';

@Injectable()
export class FindAllCountriesUseCase implements UseCase<void, Promise<CountryDto[]>> {

  constructor(
    private readonly countryRepository: CountryRepository
  ) { }

  execute(): Promise<CountryDto[]> {
    return this.countryRepository.find();
  }

}
