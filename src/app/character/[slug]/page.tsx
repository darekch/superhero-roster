import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { slugify } from '@/helpers';
import { Superhero } from '@/types';
import { superheroesList } from '@/data';
// import { CharactersService } from '@/services';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;

  // Fetch data from local /app/api/**/route.ts not works in build time after `npm run build` promt,
  // It works only when API resource is alive, not on http://localhost:3000, so I will load static data from data file for SSG/ISR
  // const character = await CharactersService.fetchCharacterBySlug(slug);

  // Workaround is to load static data from file
  const character: Superhero | undefined = superheroesList.find(
    (hero) => slug === slugify(hero.name)
  );

  if (!character) {
    notFound();
  }

  return (
    <main className='container mx-auto w-full flex-grow border-x-gray-200 xl:border-x'>
      <div className='py-2 px-4'>
        <div className='w-full'>Slug is: {slug}</div>
        <pre>{JSON.stringify(character)}</pre>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // Fetch data from local /app/api/**/route.ts not works in build time after `npm run build` promt,
  // It works only when API resource is alive, not on http://localhost:3000, so I will load static data from data file for SSG/ISR

  // Workaround is to load static data from file
  return superheroesList.map((hero: Superhero) => ({
    slug: slugify(hero.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Fetch data from local /app/api/**/route.ts not works in build time after `npm run build` promt,
  // It works only when API resource is alive, not on http://localhost:3000, so I will load static data from data file for SSG/ISR

  // Workaround is to load static data
  const character: Superhero | undefined = superheroesList.find(
    (hero) => slug === slugify(hero.name)
  );

  if (!character) {
    return { title: 'Character not found.' };
  }

  return {
    title: `${character.name} | Superheroes`,
    description: `${character.name}'s detailed superhero profile.`,
  };
}
