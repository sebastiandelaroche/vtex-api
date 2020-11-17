import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../BaseEntity';
import { State } from './State';

@Entity('country')
export class Country extends BaseEntity {

  @Column()
  name: string;

  @Column(type => State)
  states: State[];

}
