import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { CityDto } from '../dtos/CityDto';
import { CityRepository } from '@database/repositories/CityRepository';

@Injectable()
export class FindAllCitiesUseCase implements UseCase<void, Promise<CityDto[]>> {

  constructor(
    private readonly cityRepository: CityRepository
  ) { }

  execute(): Promise<CityDto[]> {
    return this.cityRepository.find();
  }

}
