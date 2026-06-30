// src/pages/Services.jsx
import React from "react";

const services = [
  {
    title: "PCB Assembly",
    description: "High-quality SMT, Through-Hole, and Mixed Technology PCB assembly with advanced manufacturing lines.",
    icon: "🔧",
    features: ["SMT Assembly", "Through-Hole", "Mixed Technology"]
  },
  {
    title: "Box Build Assembly",
    description: "Complete system integration including wiring, enclosures, and final product assembly.",
    icon: "📦",
    features: ["System Integration", "Enclosure Assembly", "Final Testing"]
  },
  {
    title: "Testing & Inspection",
    description: "Comprehensive quality assurance with AOI, Flying Probe, and Functional Testing.",
    icon: "🔬",
    features: ["AOI Inspection", "Flying Probe", "Functional Testing"]
  },
  {
    title: "Embedded Design",
    description: "Custom embedded solutions tailored to automotive, industrial, and medical applications.",
    icon: "⚡",
    features: ["PCB Design", "Firmware Development", "Prototyping"]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          End-to-end electronics manufacturing solutions from concept to production
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((svc) => (
          <div key={svc.title} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl mb-4">{svc.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h2>
            <p className="text-gray-600 mb-4">{svc.description}</p>
            <div className="flex flex-wrap gap-2">
              {svc.features.map((feature) => (
                <span key={feature} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}