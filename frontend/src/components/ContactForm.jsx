import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.text();
      if (!res.ok) throw new Error(data || "Unable to send your message.");
      toast.success(data || "Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.message || "Unable to send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 border rounded"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 border rounded"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea
          id="message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 border rounded"
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}