import React from "react";

export default function Careers() {
  const jobs = [
    {
      title: "SMT Production Engineer",
      location: "Pune",
      type: "Full Time"
    },
    {
      title: "Quality Engineer",
      location: "Bengaluru",
      type: "Full Time"
    },
    {
      title: "Embedded Hardware Engineer",
      location: "Manesar",
      type: "Full Time"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-4">
        Careers
      </h1>

      <p className="text-gray-600 mb-12">
        Join our team and help build world-class electronics manufacturing solutions.
      </p>

      <div className="grid gap-6">

        {jobs.map((job, index) => (
            <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6"
            >
                <h2 className="text-2xl font-bold">
                    {job.title}
                </h2>

                <p className="mt-2">
                    📍 {job.location}
                </p>

                <p>
                    💼 {job.type}
                </p>

                <div className="mt-4">

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mb-3 block"
                />

                <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800">
                    Submit Resume
                </button>

            </div>

        </div>
        ))}
      </div>

    </div>
  );
}