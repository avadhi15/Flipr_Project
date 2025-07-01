import { NextResponse } from 'next/server';
import { connectMongo } from '../../lib/mongo';
import Contact from '../../models/Contact';

export async function POST(request: Request) {
  try {
    console.log("👉 Connecting to MongoDB...");
    await connectMongo();

    const body = await request.json();
    console.log("👉 Received body:", body);

    const saved = await Contact.create(body);
    console.log("✅ Contact saved:", saved);

    return NextResponse.json({ success: true, saved });
  } catch (error: any) {
    console.error("❌ CONTACT_API_ERROR:", error.message);
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
