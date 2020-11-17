import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
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

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @ApiProperty()
  country: string;

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
  @IsOptional()
  @ApiProperty({ type: VisitDto, isArray: true, required: false })
  visits: VisitDto[];
}
