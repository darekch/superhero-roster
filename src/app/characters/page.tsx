import type { Metadata } from 'next';

import { CharactersService } from '@/services';
import { Heading } from '@/components/ui/Heading';
import { Characters } from '@/components/Characters';

// Ensures the page is rendered dynamically, needed to `npm run build` not be angry
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Roster | Superheroes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export default async function CharactersPage() {
  const characters = await CharactersService.fetchCharacters();

  return (
    <main className='container w-full'>
      <div className='w-full px-1 my-1'>
        <Heading>
          <span>Featured characters</span>
        </Heading>

        <div className='flex w-full my-2'>
          <Characters characters={characters} />
        </div>
      </div>
    </main>
  );
}
