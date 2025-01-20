import { SuperheroType } from './superhero-type';
import { SuperheroStat } from './superhero-stat';

export type Superhero = {
  id: number | string;
  name: string;
  image: string;
  score: number;
  aliases: string[];
  weakness?: string[];
  type: SuperheroType;
  stats: SuperheroStat[];
};
