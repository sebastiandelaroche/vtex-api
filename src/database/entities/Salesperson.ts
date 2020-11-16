import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@database/BaseEntity';

@Entity('salesperson')
export class Salesperson extends BaseEntity {

  @Column()
  name: string;

}
