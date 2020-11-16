import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { SerializerInterceptor } from '@core/interceptors';
import { FindAllStatesUseCase } from '../use-cases/FindAllStatesUseCase';
import { StateDto } from '../dtos/StateDto';

@ApiTags('State')
@Controller('states')
export class StateController {

  constructor(
    private readonly findAllStatesUseCase: FindAllStatesUseCase,
  ) { }

  @Get()
  @ApiResponse({ status: 200, type: StateDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(StateDto))
  findAll(): Promise<StateDto[]> {
    return this.findAllStatesUseCase.execute();
  }

}
