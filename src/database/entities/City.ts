import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../BaseEntity';

@Entity('city')
export class City extends BaseEntity {

  @Column()
  name: string;

}
