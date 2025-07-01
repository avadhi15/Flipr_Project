import { NextResponse } from 'next/server';
import { connectMongo } from './../../../lib/mongo';
import Contact from '../../../models/Contact';

export async function GET() {
  try {
    await connectMongo();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('[ADMIN_CONTACT_ERROR]', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
