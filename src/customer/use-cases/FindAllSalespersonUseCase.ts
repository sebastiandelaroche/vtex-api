import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';

import { SalespersonDto } from '../dtos/SalespersonDto';
import { SalespersonRepository } from '@database/repositories/SalespersonRepository';

@Injectable()
export class FindAllSalespersonUseCase implements UseCase<void, Promise<SalespersonDto[]>> {

  constructor(
    private readonly salespersonRepository: SalespersonRepository
  ) { }

  execute(): Promise<SalespersonDto[]> {
    return this.salespersonRepository
      .find() as unknown as Promise<SalespersonDto[]>;
  }

}
