import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SalespersonDto {
  @IsString()
  @ApiProperty()
  value: number;
}
