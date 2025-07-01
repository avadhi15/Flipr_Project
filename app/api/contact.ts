// import type { NextApiRequest, NextApiResponse } from 'next';
// import { connectMongo } from '../lib/mongo';
// import Contact from '../models/Contact';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await connectMongo();

//   if (req.method === 'GET') {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     return res.status(200).json({ success: true, contacts });
//   }

//   res.status(405).json({ error: 'Method Not Allowed' });
// // }