import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { SerializerInterceptor } from '@core/interceptors';
import { FindAllCitiesUseCase } from '../use-cases/FindAllCitiesUseCase';
import { CityDto } from '../dtos/CityDto';

@ApiTags('City')
@Controller('cities')
export class CityController {

  constructor(
    private readonly findAllCitiesUseCase: FindAllCitiesUseCase,
  ) { }

  @Get()
  @ApiResponse({ status: 200, type: CityDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(CityDto))
  findAll(): Promise<CityDto[]> {
    return this.findAllCitiesUseCase.execute();
  }

}
