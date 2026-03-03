import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, Like } from 'typeorm'; 
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepo: Repository<Pokemon>,
  ) {}


  async create(data: CreatePokemonDto | CreatePokemonDto[]) {
    if (Array.isArray(data)) {
      const nuevosPokemons = this.pokemonRepo.create(data);
      return await this.pokemonRepo.save(nuevosPokemons);
    }
    const nuevo = this.pokemonRepo.create(data);
    return await this.pokemonRepo.save(nuevo);
  }

  async findAdvanced(name: string, type: string, minHp: number) {
    return await this.pokemonRepo.find({
      where: {
        name: Like(`%${name || ''}%`), 
        type: type ? type : undefined,
        hp: MoreThan(minHp),
      },
    });
  }

  async findAll() {
    return await this.pokemonRepo.find();
  }
}