import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ObjectID } from 'typeorm';
import { IsArray, IsNumber, IsString, ValidateNested, IsOptional } from 'class-validator';
import { CityDto } from '../../location/dtos/CityDto';
import { CountryDto } from '../../location/dtos/CountryDto';
import { StateDto } from '../../location/dtos/StateDto';
import { VisitDto } from './VisitDto';

export class UpdateCustomerDto {
  id: ObjectID;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  nit?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;

  @Type(() => CityDto)
  @IsOptional()
  @ValidateNested()
  @ApiPropertyOptional({ type: CityDto })
  city?: CityDto;

  @Type(() => StateDto)
  @IsOptional()
  @ValidateNested()
  @ApiPropertyOptional({ type: StateDto })
  state?: StateDto;

  @Type(() => CountryDto)
  @IsOptional()
  @ValidateNested()
  @ApiPropertyOptional({ type: CountryDto })
  country?: CountryDto;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  quote?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  balanceQuote?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  visitPercentage?: number;

  @Type(() => VisitDto)
  @IsOptional()
  @IsArray()
  @ApiPropertyOptional({ type: VisitDto, isArray: true })
  visits?: VisitDto[];
}
