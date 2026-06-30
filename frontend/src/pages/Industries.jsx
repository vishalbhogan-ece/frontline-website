import React from "react";
import { INDUSTRIES } from "../constants";

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-10">Industries We Serve</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {INDUSTRIES.map((item) => (
          <div key={item} className="bg-white shadow p-8 rounded-xl">
            <h2 className="text-2xl font-bold">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}