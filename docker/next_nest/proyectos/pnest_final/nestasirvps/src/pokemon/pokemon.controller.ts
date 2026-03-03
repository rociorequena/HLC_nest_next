import { Controller, Get, Post, Body, Query, ParseIntPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Controller('pokemon') 
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}


  @Post()
  create(@Body() data: any) {
    return this.pokemonService.create(data);
  }


  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  
  @Get('filter')
  findAdvanced(
    @Query('name') name: string,
    @Query('type') type: string,
    @Query('minHp', ParseIntPipe) minHp: number,
  ) {
    return this.pokemonService.findAdvanced(name, type, minHp);
  }
}