import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@database/BaseEntity';

@Entity('city')
export class City extends BaseEntity {

  @Column()
  name: string;

}
