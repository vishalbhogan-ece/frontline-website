// src/pages/Quality.jsx
import React from "react";

const qualityStages = [
  {
    title: "Incoming Quality Control",
    description: "Rigorous inspection of all incoming materials, PCB panels, and components before production.",
    icon: "📋"
  },
  {
    title: "In-Process Quality",
    description: "Continuous monitoring and inspection during assembly, soldering, and manufacturing operations.",
    icon: "🔍"
  },
  {
    title: "Final Quality Verification",
    description: "Comprehensive testing including AOI, Flying Probe, and Functional Testing before dispatch.",
    icon: "✅"
  }
];

export default function Quality() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">Quality Assurance</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Committed to the highest standards of quality across all our facilities
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {qualityStages.map((stage, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 relative">
            <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <div className="text-4xl mt-4 mb-4">{stage.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{stage.title}</h2>
            <p className="text-gray-600">{stage.description}</p>
          </div>
        ))}
      </div>
      
      {/* Certifications Display */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['IATF 16949', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'].map((cert) => (
            <span key={cert} className="bg-white px-6 py-3 rounded-lg shadow-sm border font-semibold text-gray-800">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}