import { NextResponse } from 'next/server';

import { slugify } from '@/helpers';
import { superheroesList } from '@/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const superhero = superheroesList.find((hero) => slugify(hero.name) === slug);

  if (!superhero) {
    return NextResponse.json(
      { message: 'Superhero not found.' },
      { status: 404 }
    );
  }

  return NextResponse.json(superhero);
}
