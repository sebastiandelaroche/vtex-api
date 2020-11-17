import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { StateDto } from './StateDto';

export class CountryDto {
  @IsString()
  @ApiProperty()
  name: string;

  @Type(() => StateDto)
  @IsArray()
  @ApiProperty({ type: StateDto, isArray: true })
  states: StateDto[];
}
