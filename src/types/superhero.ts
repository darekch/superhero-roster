import { SuperheroType } from './superhero-type';
import { SuperheroStat } from './superhero-stat';
import { SuperheroUniverse } from './superhero-universe';

export type Superhero = {
  id: number | string;
  name: string;
  image: string;
  score: number;
  aliases: string[];
  weakness?: string[];
  type: SuperheroType;
  stats: SuperheroStat[];
  universe: SuperheroUniverse;
};
