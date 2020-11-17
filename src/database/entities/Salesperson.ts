import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../BaseEntity';

@Entity('salesperson')
export class Salesperson extends BaseEntity {

  @Column()
  name: string;

}
