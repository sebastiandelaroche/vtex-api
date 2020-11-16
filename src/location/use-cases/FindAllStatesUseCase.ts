import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { StateDto } from '../dtos/StateDto';
import { StateRepository } from '@database/repositories/StateRepository';

@Injectable()
export class FindAllStatesUseCase implements UseCase<void, Promise<StateDto[]>> {

  constructor(
    private readonly stateRepository: StateRepository
  ) { }

  execute(): Promise<StateDto[]> {
    return this.stateRepository.find();
  }

}
