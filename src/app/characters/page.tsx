import type { Metadata } from 'next';

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

export default async function Characters() {
  const characters = await fetchData();

  return (
    <main className='container mx-auto w-full flex-grow border-x-gray-200 xl:border-x'>
      <div className='py-2 px-4'>
        <div className='w-full'>
          <p className='mb-2 text-sm font-semibold text-pink-600'>
            Characters!
          </p>

          <pre>{JSON.stringify(characters, null, 4)}</pre>
        </div>
      </div>
    </main>
  );
}
