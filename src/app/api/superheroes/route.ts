import { NextResponse } from 'next/server';

import { superheroesList } from '@/data';

export async function GET() {
  return NextResponse.json(superheroesList);
}
