import { Column } from 'typeorm';
import { BaseEntity } from '../BaseEntity';
import { Salesperson } from './Salesperson';

export class Visit extends BaseEntity {
  @Column()
  date: Date;

  @Column(type => Salesperson)
  salesperson: Salesperson;

  @Column()
  value: number;

  @Column()
  visitValue: number;

  @Column()
  visitObservations: string;
}
