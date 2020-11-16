import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getPrototypes } from '@core/utils';

const repositories = getPrototypes(
  `${__dirname}/repositories/*{.ts,.js}`,
);

const dbConfig = TypeOrmModule.forRoot({
  type: 'mongodb',
  url: process.env.DB_URL,
  useUnifiedTopology: true,
  authSource: 'admin',
  entities: [
    __dirname + '/entities/*{.ts,.js}',
  ],
});

const providerRepositories = TypeOrmModule.forFeature([
  ...repositories
]);

@Global()
@Module({
  imports: [
    providerRepositories,
    dbConfig,
  ],
  providers: [
    ...repositories,
  ],
  exports: [
    providerRepositories,
  ],
})
export class DatabaseModule { }
