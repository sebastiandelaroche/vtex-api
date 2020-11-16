import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { SalespersonDto } from './SalespersonDto';

export class VisitDto {
  @IsDate()
  @ApiProperty()
  date: Date;

  @Type(() => SalespersonDto)
  @ValidateNested()
  @ApiProperty({ type: SalespersonDto })
  salesperson: SalespersonDto;

  @IsNumber()
  @ApiProperty()
  value: number;

  @IsNumber()
  @ApiProperty()
  visitValue: number;

  @IsString()
  @ApiProperty()
  visitObservations: string;
}
