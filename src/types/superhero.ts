import { SuperheroType } from './superhero-type';
import { SuperheroStat } from './superhero-stat';
import { SuperheroUniverse } from './superhero-universe';

export type Superhero = {
  id: string;
  name: string;
  image: string;
  score: number;
  aliases: string[];
  weakness?: string[];
  description: string;
  type: SuperheroType;
  stats: SuperheroStat[];
  universe: SuperheroUniverse;
};
