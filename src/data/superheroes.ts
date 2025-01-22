import {
  Superhero,
  SuperheroType,
  SuperheroStatName,
  SuperheroUniverse,
} from '@/types';

export const superheroesList: Array<Superhero> = [
  {
    id: '1',
    name: 'Batman',
    score: 8.3,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.DC,
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    name: 'Joker',
    score: 8.2,
    type: SuperheroType.Villain,
    universe: SuperheroUniverse.DC,
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    name: 'Superman',
    score: 9.6,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.DC,
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    name: 'Gamora',
    score: 8.4,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.Marvel,
    weakness: [],
    aliases: ['Gamora'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 4.5,
      },
      {
        name: SuperheroStatName.Durability,
        value: 6.7,
      },
      {
        name: SuperheroStatName.Speed,
        value: 8.5,
      },
      {
        name: SuperheroStatName.Agility,
        value: 9.5,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 9.2,
      },
    ],
    image: 'https://cdn.marvel.com/content/1x/022gam_ons_crd_02.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '5',
    name: 'Thanos',
    score: 9.9,
    type: SuperheroType.Villain,
    universe: SuperheroUniverse.Marvel,
    weakness: [],
    aliases: ['Thanos'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 9.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 8.7,
      },
      {
        name: SuperheroStatName.Speed,
        value: 5.5,
      },
      {
        name: SuperheroStatName.Agility,
        value: 5.5,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 9.8,
      },
    ],
    image: 'https://cdn.marvel.com/content/1x/019tha_ons_crd_03.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '6',
    name: 'Wonder woman',
    score: 8.7,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.DC,
    weakness: [],
    aliases: ['Wonder woman', 'Woman'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 7.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 6.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 8.5,
      },
      {
        name: SuperheroStatName.Agility,
        value: 9.1,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 8.1,
      },
    ],
    image:
      'https://static.dc.com/2023-02/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '7',
    name: 'Lex Luthor',
    score: 8,
    type: SuperheroType.Villain,
    universe: SuperheroUniverse.DC,
    weakness: [],
    aliases: ['Lex Luthor', 'Luthor'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 6.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 7.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 9.1,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.1,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 9.3,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_LexLuthor_5c4a62d2862528.01646688.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '8',
    name: 'Aquaman',
    score: 8,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.DC,
    weakness: [],
    aliases: ['Aquaman'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 8.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 8.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 7.1,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.1,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 8.3,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_Aquaman_5c411a95e70ff5.50429372.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '9',
    name: 'Thor',
    score: 9.2,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.Marvel,
    weakness: [],
    aliases: ['Thor', 'Thor Odinson'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 9.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 9.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 7.3,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.1,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 9.3,
      },
    ],
    image: 'https://cdn.marvel.com/content/1x/004tho_ons_crd_04.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '10',
    name: 'Spiderman',
    score: 7.9,
    type: SuperheroType.Hero,
    universe: SuperheroUniverse.Marvel,
    weakness: [],
    aliases: ['Spiderman', 'Spider', 'Parker'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 9.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 9.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 7.3,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.1,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 9.3,
      },
    ],
    image: 'https://cdn.marvel.com/content/1x/spidey02_ons_crd_01.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '11',
    name: 'Harley Quinn',
    score: 7.3,
    type: SuperheroType.Villain,
    universe: SuperheroUniverse.DC,
    weakness: [''],
    aliases: ['Harley Quinn'],
    stats: [
      {
        name: SuperheroStatName.Strength,
        value: 3.8,
      },
      {
        name: SuperheroStatName.Durability,
        value: 5.2,
      },
      {
        name: SuperheroStatName.Speed,
        value: 9.3,
      },
      {
        name: SuperheroStatName.Agility,
        value: 8.5,
      },
      {
        name: SuperheroStatName.Inteligence,
        value: 7.3,
      },
    ],
    image:
      'https://static.dc.com/dc/files/default_images/Char_Thumb_HarleyQuinn_5c4a3e758122a3.39576701.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
