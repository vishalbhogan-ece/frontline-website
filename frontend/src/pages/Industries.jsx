import React from "react";

export default function Industries() {
  const industries = [
    "Automotive",
    "Industrial",
    "Telecom",
    "Consumer Electronics",
    "Medical",
    "Defense"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Industries We Serve
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {industries.map((item) => (
          <div
            key={item}
            className="bg-white shadow p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold">
              {item}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
}