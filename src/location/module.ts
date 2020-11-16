import { Module, HttpModule } from '@nestjs/common';
import { getPrototypes } from '@core/utils';

const controllers = getPrototypes(
  `${__dirname}/controllers/*{.ts,.js}`,
);

const useCases = getPrototypes(
  `${__dirname}/use-cases/*{.ts,.js}`,
);

@Module({
  imports: [HttpModule],
  controllers: [...controllers],
  providers: [
    ...useCases,
  ],
})
export class LocationModule { }
