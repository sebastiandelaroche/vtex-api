import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import * as faker from 'faker';
import { ObjectID } from 'mongodb';
import { Salesperson } from '../entities/Salesperson';

export default class Seed2 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const count = await connection.getRepository(Salesperson).count();

    if (count > 0) {
      await connection.getRepository(Salesperson).clear();
    }

    await connection.getRepository(Salesperson).save([
      {
        id: new ObjectID(),
        name: faker.name.findName(),
      },
      {
        id: new ObjectID(),
        name: faker.name.findName(),
      }
    ]);

  }
}
