import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { SerializerInterceptor } from '@core/interceptors';
import { FindAllCountriesUseCase } from '../use-cases/FindAllCountriesUseCase';
import { CountryDto } from '../dtos/CountryDto';

@ApiTags('Country')
@Controller('countries')
export class CountryController {

  constructor(
    private readonly findAllCountriesUseCase: FindAllCountriesUseCase,
  ) { }

  @Get()
  @ApiResponse({ status: 200, type: CountryDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(CountryDto))
  findAll(): Promise<CountryDto[]> {
    return this.findAllCountriesUseCase.execute();
  }

}
