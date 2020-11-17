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

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  quote: number;

  @Column()
  balanceQuote: number;

  @Column()
  visitPercentage: number;

  @Column(type => Visit)
  visits: Visit[];
}
