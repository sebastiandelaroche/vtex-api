import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class StateDto {
  @IsString()
  @ApiProperty()
  name: string;
}
