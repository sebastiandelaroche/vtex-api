import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../BaseEntity';
import { City } from './City';

@Entity('state')
export class State extends BaseEntity {

  @Column()
  name: string;

  @Column(type => City)
  cities: City[];

}
