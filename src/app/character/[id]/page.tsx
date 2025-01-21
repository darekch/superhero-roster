import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Character | Superheroes',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

type Props = {
  params: { id: string };
};

export default async function CharacterPage({ params }: Props) {
  const { id } = await params;
  return (
    <main className='container mx-auto w-full flex-grow border-x-gray-200 xl:border-x'>
      <div className='py-2 px-4'>
        <div className='w-full'>
          <p className='mb-2 text-sm font-semibold text-pink-600'>
            Characters!
          </p>

          <div>Character ID: {id}</div>
        </div>
      </div>
    </main>
  );
}
