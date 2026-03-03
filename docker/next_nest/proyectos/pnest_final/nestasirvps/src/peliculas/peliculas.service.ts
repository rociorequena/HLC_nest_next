import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, Like } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepo: Repository<Pelicula>,
  ) {}


  async create(data: CreatePeliculaDto | CreatePeliculaDto[]) {
    if (Array.isArray(data)) {
      const nuevasPeliculas = this.peliculaRepo.create(data);
      return await this.peliculaRepo.save(nuevasPeliculas);
    }
    const nuevaPelicula = this.peliculaRepo.create(data);
    return await this.peliculaRepo.save(nuevaPelicula);
  }

 
  async findByFilters(title: string, start: number, end: number) {
    return await this.peliculaRepo.find({
      where: {
        title: Like(`%${title || ''}%`),
        year: Between(start || 1888, end || 2026),
      },
    });
  }

  async findAll() {
    return await this.peliculaRepo.find();
  }
}