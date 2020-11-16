import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@database/BaseEntity';

@Entity('country')
export class Country extends BaseEntity {

  @Column()
  name: string;

}
