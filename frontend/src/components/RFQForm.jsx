import React, { useState } from "react";

export default function RFQForm() {

  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    requirement: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("RFQ Submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-8"
    >

      <h2 className="text-3xl font-bold mb-6">
        Request For Quote
      </h2>

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Company Name"
      />

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Contact Person"
      />

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Email"
      />

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Phone"
      />

      <textarea
        className="w-full border p-3 mb-4 rounded"
        rows="5"
        placeholder="Project Requirement"
      />

      <input
        type="file"
        className="mb-4"
      />

      <button
        className="bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Submit RFQ
      </button>

    </form>
  );
}