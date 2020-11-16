import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { SerializerInterceptor } from '@core/interceptors';
import { FindAllSalespersonUseCase } from '../use-cases/FindAllSalespersonUseCase';
import { SalespersonDto } from '../dtos/SalespersonDto';

@ApiTags('Salesperson')
@Controller('salesperson')
export class SalespersonController {

  constructor(
    private readonly findAllSalespersonUseCase: FindAllSalespersonUseCase,
  ) { }

  @Get()
  @ApiResponse({ status: 200, type: SalespersonDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(SalespersonDto))
  findAll(): Promise<SalespersonDto[]> {
    return this.findAllSalespersonUseCase.execute();
  }

}
