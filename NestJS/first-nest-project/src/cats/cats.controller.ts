import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return { cats: 'get all cat api' };
  }

  //* pipe는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여
  //* 서버가 원하는 데이터를 얻을 수 있도록 도와주는 클래스입니다.
  //* https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters
  //* pipes and filters pattern,

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) param) {
    //ParseIntPipe를 통해서 타입 변환과 vaildation error를 내줄 수도 있음
    console.log(typeof param);
    return 'find cat by id';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
