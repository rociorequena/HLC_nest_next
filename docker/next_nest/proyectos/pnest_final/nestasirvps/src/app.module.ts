import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

import { PinturaModule } from './pintura/pintura.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LibreriaModule } from './libreria/libreria.module';
import { MensajesModule } from './mensajes/mensajes.module';
import { R11Module } from './r11/r11.module';
import { RnnModule } from './rnn/rnn.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432, 
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '', 
      database: process.env.DB_DATABASE || 'nest',
      
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      
      synchronize: true, 
      
      ssl: false, 
    }),

    PinturaModule,
    UsuarioModule,
    LibreriaModule,
    MensajesModule,
    R11Module,
    RnnModule,
    PeliculasModule,
    PokemonModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}