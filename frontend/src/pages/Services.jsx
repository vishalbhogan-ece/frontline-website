import React from "react";

export default function Services() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <div className="space-y-6">

        <div>
          <h2 className="text-2xl font-semibold">PCB Assembly</h2>
          <p>High-quality SMT and Through-Hole PCB assembly with advanced manufacturing lines.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Box Build Assembly</h2>
          <p>Complete system integration including wiring, enclosures, and final assembly.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Testing & Inspection</h2>
          <p>AOI, functional testing, and quality assurance processes.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Embedded Design</h2>
          <p>Custom embedded solutions tailored to industrial and automotive applications.</p>
        </div>

      </div>

    </div>
  );
}