import React from "react";

export default function Services() {
  const services = [
    {
      title: "PCB Assembly",
      desc: "High-quality SMT and Through-Hole PCB assembly with advanced manufacturing lines.",
    },
    {
      title: "Box Build Assembly",
      desc: "Complete system integration including wiring, enclosures, and final assembly.",
    },
    {
      title: "Testing & Inspection",
      desc: "AOI, functional testing, and quality assurance processes.",
    },
    {
      title: "Embedded Design",
      desc: "Custom embedded solutions tailored to industrial and automotive applications.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((svc) => (
          <div key={svc.title} className="bg-white shadow rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">{svc.title}</h2>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}