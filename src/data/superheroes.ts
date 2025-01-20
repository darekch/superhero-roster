import { Superhero, SuperheroType, SuperheroStatName } from '@/types';

export const superheroesList: Array<Superhero> = [
  {
    id: '1',
    name: 'Batman',
    type: SuperheroType.Hero,
    score: 8.3,
    weakness: ['Joker'],
    aliases: ['Bat', 'Batman', 'Bruce Wayne', 'Dark Knight'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 8.1,
      },
      {
        name: SuperheroStatName.Durability,
        value: 7.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 5.1,
      },
      {
        name: SuperheroStatName.Agility,
        value: 4.2,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 6.2,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg',
  },
  {
    id: '2',
    name: 'Joker',
    type: SuperheroType.Villain,
    score: 8.2,
    weakness: [],
    aliases: ['Joker', 'Jester', 'Clown'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 3.1,
      },
      {
        name: SuperheroStatName.Durability,
        value: 8.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 3.4,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.2,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 10,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_Joker_5c4a42b7ef2011.52750480.jpg',
  },

  {
    id: '3',
    name: 'Superman',
    type: SuperheroType.Hero,
    score: 9.6,
    weakness: ['Lux Luthor'],
    aliases: ['Superman', 'Man of Steel', 'Kal-El'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 9.5,
      },
      {
        name: SuperheroStatName.Durability,
        value: 8.7,
      },
      {
        name: SuperheroStatName.Speed,
        value: 9.5,
      },
      {
        name: SuperheroStatName.Agility,
        value: 7.5,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 8.2,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_Superman_5c3fc2758f6984.90100206.jpg',
  },
  // {
  //   name: 'Gamora',
  //   score: 8.4,
  //   type: 'hero',
  // },
  // {
  //   name: 'Thanos',
  //   score: 9.9,
  //   type: 'villain',
  // },
  // {
  //   name: 'Wonder Woman',
  //   score: 8.7,
  //   type: 'hero',
  // },
  // {
  //   name: 'Lex Luthor',
  //   score: 8,
  //   type: 'villain',
  // },
  // {
  //   name: 'Aquaman',
  //   score: 3.5,
  //   type: 'hero',
  // },
  // {
  //   name: 'Thor',
  //   score: 9.2,
  //   type: 'hero',
  // },
  // {
  //   name: 'Spiderman',
  //   score: 7.9,
  //   type: 'hero',
  // },
  // {
  //   name: 'Harley Quinn',
  //   score: 7.3,
  //   type: 'villain',
  // },
];
