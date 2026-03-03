import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  type: string;

  @IsInt()
  @Min(1, { message: 'El HP debe ser al menos 1' })
  @Max(999)
  hp: number;

  @IsInt()
  @Min(1, { message: 'El ataque debe ser al menos 1' })
  attack: number;

  @IsInt()
  @Min(1)
  defense: number;
}