import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { CityDto } from '../../location/dtos/CityDto';
import { CountryDto } from '../../location/dtos/CountryDto';
import { StateDto } from '../../location/dtos/StateDto';
import { VisitDto } from './VisitDto';

export class CustomerDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  nit: string;

  @IsString()
  @ApiProperty()
  fullName: string;

  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  phone: string;

  @Type(() => CityDto)
  @ApiProperty({ type: CityDto })
  city: CityDto;

  @Type(() => StateDto)
  @ApiProperty({ type: StateDto })
  state: StateDto;

  @Type(() => CountryDto)
  @ApiProperty({ type: CountryDto })
  country: CountryDto;

  @IsNumber()
  @ApiProperty()
  quote: number;

  @IsNumber()
  @ApiProperty()
  balanceQuote: number;

  @IsNumber()
  @ApiProperty()
  visitPercentage: number;

  @Type(() => VisitDto)
  @IsArray()
  @ApiProperty({ type: VisitDto, isArray: true })
  visits: VisitDto[];
}
