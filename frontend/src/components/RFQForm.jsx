import React, { useState } from "react";
import toast from "react-hot-toast";

export default function RFQForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    requirement: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.company || !form.name || !form.email || !form.requirement) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) formData.append(key, form[key]);
    });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/rfq`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.text();
      if (!res.ok) throw new Error(data || "RFQ submission failed.");
      toast.success(data || "RFQ submitted successfully.");
      setForm({ company: "", name: "", email: "", phone: "", requirement: "", file: null });
      // Reset file input
      document.getElementById("rfq-file").value = "";
    } catch (error) {
      toast.error(error.message || "Unable to submit RFQ.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Request For Quote</h2>

      <div className="mb-4">
        <label htmlFor="company" className="block font-medium mb-1">Company Name *</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">Contact Person *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="requirement" className="block font-medium mb-1">Project Requirement *</label>
        <textarea
          id="requirement"
          name="requirement"
          rows="5"
          value={form.requirement}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rfq-file" className="block font-medium mb-1">Attach Document (optional)</label>
        <input
          id="rfq-file"
          name="file"
          type="file"
          onChange={handleChange}
          className="mb-4"
          disabled={isSubmitting}
          accept=".pdf,.doc,.docx,.zip"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit RFQ"}
      </button>
    </form>
  );
}