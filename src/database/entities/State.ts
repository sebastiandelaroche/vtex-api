import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@database/BaseEntity';

@Entity('state')
export class State extends BaseEntity {

  @Column()
  name: string;

}
