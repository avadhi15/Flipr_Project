'use client';
import { useEffect, useState } from 'react';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/contacts')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.contacts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Form Submissions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table className="min-w-full border border-gray-200 shadow-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2 text-left">Full Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Mobile</th>
              <th className="p-2 text-left">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50 text-sm">
                <td className="p-2">{c.fullName}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.mobile}</td>
                <td className="p-2">{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
