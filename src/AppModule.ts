import { Module } from '@nestjs/common';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from './database/module';
import { CustomerModule } from './customer/module';
import { LocationModule } from './location/module';

@Module({
  imports: [
    MorganModule.forRoot(),
    DatabaseModule,
    CustomerModule,
    LocationModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ]
})
export class AppModule { }
