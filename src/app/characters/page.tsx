import type { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';
import { Characters } from '@/components/Characters';

export const metadata: Metadata = {
  title: 'Roster | Superheroes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

async function fetchData() {
  const res = await fetch('http://localhost:3000/api/superheroes');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function CharactersPage() {
  const characters = await fetchData();

  return (
    <main className='container w-full'>
      <div className='w-full my-1'>
        <Heading>
          <span>Featured characters</span>
        </Heading>

        <div className='block my-2'>
          <Characters characters={characters} />
        </div>
      </div>
    </main>
  );
}
