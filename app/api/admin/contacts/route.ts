import { NextResponse } from 'next/server';
import { connectMongo } from '../../../lib/mongo';
import Contact from '../../../models/Contact';

export async function POST(request: Request) {
  try {
    await connectMongo();
    const body = await request.json();

    const saved = await Contact.create(body);

    return NextResponse.json({ success: true, saved });
  } catch (error) {
    console.error('[CONTACT_API_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
