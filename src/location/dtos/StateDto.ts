import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { CityDto } from './CityDto';

export class StateDto {
  @IsString()
  @ApiProperty()
  name: string;

  @Type(() => StateDto)
  @IsArray()
  @ApiProperty({ type: CityDto, isArray: true })
  cities: CityDto[];
}
