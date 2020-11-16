import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../BaseEntity';
import { City } from './City';
import { Country } from './Country';
import { State } from './State';
import { Visit } from './Visit';

@Entity('customer')
export class Customer extends BaseEntity {
  @Column()
  nit: string;

  @Column()
  fullName: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column(type => City)
  city: City;

  @Column(type => State)
  state: State;

  @Column(type => Country)
  country: Country;

  @Column()
  quote: number;

  @Column()
  balanceQuote: number;

  @Column()
  visitPercentage: number;

  @Column(type => Visit)
  visits: Visit[];
}
