import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CityDto } from '../../location/dtos/CityDto';
import { CountryDto } from '../../location/dtos/CountryDto';
import { StateDto } from '../../location/dtos/StateDto';
import { VisitDto } from './VisitDto';

export class CreateCustomerDto {
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
  @ValidateNested()
  @ApiProperty({ type: CityDto })
  city: CityDto;

  @Type(() => StateDto)
  @ValidateNested()
  @ApiProperty({ type: StateDto })
  state: StateDto;

  @Type(() => CountryDto)
  @ValidateNested()
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
  @ArrayMinSize(1)
  @ApiProperty({ type: VisitDto, isArray: true })
  visits: VisitDto[];
}
