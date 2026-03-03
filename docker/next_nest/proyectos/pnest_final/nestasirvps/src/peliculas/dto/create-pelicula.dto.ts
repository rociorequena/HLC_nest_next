import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  director: string;

  @IsInt()
  @Min(1888) 
  year: number;

  @IsInt()
  length_minutes: number;
}