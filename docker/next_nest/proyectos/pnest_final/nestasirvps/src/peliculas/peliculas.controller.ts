import { Controller, Get, Post, Body, Query, ParseIntPipe } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  create(@Body() data: any) {
    return this.peliculasService.create(data);
  }

  @Get()
  findAll() {
    return this.peliculasService.findAll();
  }

 
  @Get('filter')
  findFiltered(
    @Query('title') title: string,
    @Query('start', ParseIntPipe) start: number,
    @Query('end', ParseIntPipe) end: number,
  ) {
    return this.peliculasService.findByFilters(title, start, end);
  }
}