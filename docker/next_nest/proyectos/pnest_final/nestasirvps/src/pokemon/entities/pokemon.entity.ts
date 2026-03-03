import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @Column({ type: 'int' })
  hp: number;

  @Column({ type: 'int' })
  attack: number;

  @Column({ type: 'int', default: 50 })
  defense: number;
}