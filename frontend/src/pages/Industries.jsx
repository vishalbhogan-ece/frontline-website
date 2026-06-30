// src/pages/Industries.jsx
import React from "react";

const industries = [
  { name: "Automotive", icon: "🚗", desc: "PCB assemblies for automotive electronics and control systems" },
  { name: "Industrial", icon: "🏭", desc: "Industrial automation, control panels, and IoT solutions" },
  { name: "Telecom", icon: "📡", desc: "Communication equipment and network infrastructure" },
  { name: "Consumer Electronics", icon: "📱", desc: "High-volume consumer device manufacturing" },
  { name: "Medical", icon: "🏥", desc: "Medical devices and healthcare electronics" },
  { name: "Defense", icon: "🛡️", desc: "Military-grade electronics and ruggedized systems" }
];

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">Industries We Serve</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Trusted by leaders across six major sectors
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {industries.map((item) => (
          <div key={item.name} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}