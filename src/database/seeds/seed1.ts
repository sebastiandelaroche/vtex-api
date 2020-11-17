import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Country } from '../entities/Country';

export default class Seed1 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const count = await connection.getRepository(Country).count();

    if (count > 0) {
      await connection.getRepository(Country).clear();
    }

    await connection.getRepository(Country).save([
      {
        id: new ObjectID(),
        name: 'Colombia',
        states: [
          {
            id: new ObjectID(),
            name: 'Antioquia',
            cities: [
              {
                id: new ObjectID(),
                name: 'Florida'
              }
            ]
          }
        ]
      }
    ]);

  }
}
