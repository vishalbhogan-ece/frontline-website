import React from "react";

export default function Infrastructure() {
  const equipment = [
    "SMT Production Lines",
    "Stencil Printers",
    "High Speed Pick & Place Machines",
    "Reflow Ovens",
    "AOI Systems",
    "Flying Probe Testing",
    "Wave Soldering",
    "Functional Testing Stations"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-6">
        Manufacturing Infrastructure
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        Frontline Electronics operates advanced manufacturing
        facilities across Pune, Bengaluru and Manesar,
        equipped with modern SMT assembly and testing systems.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {equipment.map((machine) => (
          <div
            key={machine}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg">
              {machine}
            </h3>
          </div>
        ))}

      </div>

    </div>
  );
}