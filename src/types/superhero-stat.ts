export type SuperheroStat = {
  name: SuperheroStatName;
  value: number;
};

export enum SuperheroStatName {
  Strength = 'strength',
  Durability = 'durability',
  Speed = 'speed',
  Agility = 'agility',
  Inteligence = 'inteligence',
}
