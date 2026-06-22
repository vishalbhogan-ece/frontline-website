import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.text();

      if (!res.ok) {
        throw new Error(data || "Unable to send your message.");
      }

      setStatus(data || "Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error.message || "Unable to send your message right now.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        className="w-full p-3 border rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        className="w-full p-3 border rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Message"
        value={form.message}
        className="w-full p-3 border rounded"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800">
        Send Message
      </button>

      {status && <p className="text-sm text-gray-700">{status}</p>}
    </form>
  );
}
