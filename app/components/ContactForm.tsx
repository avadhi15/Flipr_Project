'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Submitted successfully!');
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Server error.');
    }
  };

  return (
    <div className="bg-blue-900/90 text-white p-8 rounded-lg shadow-xl border-3 border-white w-full max-w-md">
      <h2 className="text-inter text-2xl font-bold mb-6 text-center">
        Get a Free Consultation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-blue-800/60 border-2 border-white focus:border-blue-400 focus:outline-none placeholder-blue-200/70"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="space-y-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-blue-800/60 border-2 border-white focus:border-blue-400 focus:outline-none placeholder-blue-200/70"
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="space-y-1">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-blue-800/60 border-2 border-white focus:border-blue-400 focus:outline-none placeholder-blue-200/70"
            placeholder="Mobile Number"
            required
          />
        </div>

        <div className="space-y-1">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-blue-800/60 border-2 border-white focus:border-blue-400 focus:outline-none placeholder-blue-200/70"
            placeholder="Area, City"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition font-medium text-white mt-2"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
}
