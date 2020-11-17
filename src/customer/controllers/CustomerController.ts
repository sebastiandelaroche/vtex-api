import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

import { SerializerInterceptor } from '@core/interceptors';
import { CreateCustomerDto } from '../dtos/CreateCustomerDto';
import { CustomerDto } from '../dtos/CustomerDto';
import { UpdateCustomerDto } from '../dtos/UpdateCustomerDto';
import { CreateCustomerUseCase } from '../use-cases/CreateCustomerUseCase';
import { UpdateCustomerUseCase } from '../use-cases/UpdateCustomerUseCase';
import { FindAllCustomersUseCase } from '../use-cases/FindAllCustomersUseCase';
import { DeleteCustomerUseCase } from '../use-cases/DeleteCustomerUseCase';

@ApiTags('Customer')
@Controller('customers')
export class CustomerController {

  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly updateCustomerUseCase: UpdateCustomerUseCase,
    private readonly findAllCustomersUseCase: FindAllCustomersUseCase,
    private readonly deleteCustomerUseCase: DeleteCustomerUseCase,
  ) { }

  @Post()
  @HttpCode(201)
  @ApiResponse({ status: 201, type: CustomerDto })
  @UseInterceptors(new SerializerInterceptor(CustomerDto))
  create(@Body() data: CreateCustomerDto): Promise<CustomerDto> {
    return this.createCustomerUseCase.execute(data);
  }

  @Patch('/:id')
  @ApiResponse({ status: 200, type: CustomerDto })
  @UseInterceptors(new SerializerInterceptor(CustomerDto))
  update(
    @Param('id') id: ObjectID,
    @Body() data: UpdateCustomerDto,
  ): Promise<CustomerDto> {
    return this.updateCustomerUseCase.execute({ ...data, id });
  }

  @Get()
  @ApiResponse({ status: 200, type: CustomerDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(CustomerDto))
  findAll(): Promise<CustomerDto[]> {
    return this.findAllCustomersUseCase.execute();
  }

  @Delete('/:id')
  @ApiResponse({ status: 200 })
  delete(@Param('id') id: ObjectID): Promise<ObjectID> {
    return this.deleteCustomerUseCase.execute(id);
  }

}
