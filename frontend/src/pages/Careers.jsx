import React, { useState } from "react";
import toast from "react-hot-toast";
import { JOBS } from "../constants";

export default function Careers() {
  const [applications, setApplications] = useState(
    JOBS.map(() => ({ file: null, isSubmitting: false }))
  );

  const handleFileChange = (index, file) => {
    const updated = [...applications];
    updated[index].file = file;
    setApplications(updated);
  };

  const handleSubmit = async (index, jobTitle) => {
    const app = applications[index];
    if (!app.file) {
      toast.error("Please select a resume file.");
      return;
    }

    // Update submitting state
    const updated = [...applications];
    updated[index].isSubmitting = true;
    setApplications(updated);

    const formData = new FormData();
    formData.append("job", jobTitle);
    formData.append("resume", app.file);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/apply`,
        { method: "POST", body: formData }
      );
      const data = await res.text();
      if (!res.ok) throw new Error(data || "Application failed.");
      toast.success(`Application for ${jobTitle} submitted.`);
      // Reset file input
      document.getElementById(`file-${index}`).value = "";
      const reset = [...applications];
      reset[index].file = null;
      setApplications(reset);
    } catch (error) {
      toast.error(error.message || "Unable to submit application.");
    } finally {
      const reset = [...applications];
      reset[index].isSubmitting = false;
      setApplications(reset);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-4">Careers</h1>
      <p className="text-gray-600 mb-12">
        Join our team and help build world-class electronics manufacturing solutions.
      </p>

      <div className="grid gap-6">
        {JOBS.map((job, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="mt-2">📍 {job.location}</p>
            <p>💼 {job.type}</p>

            <div className="mt-4">
              <input
                id={`file-${index}`}
                type="file"
                accept=".pdf,.doc,.docx"
                className="mb-3 block"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                disabled={applications[index].isSubmitting}
              />
              <button
                onClick={() => handleSubmit(index, job.title)}
                disabled={applications[index].isSubmitting}
                className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 disabled:opacity-50"
              >
                {applications[index].isSubmitting ? "Submitting..." : "Submit Resume"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}