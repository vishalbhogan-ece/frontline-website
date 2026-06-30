import React from "react";

export default function Quality() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">Quality Assurance</h1>
      <div className="space-y-10">
        <div className="bg-white shadow p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Incoming Quality Control</h2>
          <p>Inspection of all incoming materials, PCB panels and components.</p>
        </div>
        <div className="bg-white shadow p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">In-Process Quality</h2>
          <p>Continuous inspection during assembly, soldering and manufacturing operations.</p>
        </div>
        <div className="bg-white shadow p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Final Quality Verification</h2>
          <p>AOI, Flying Probe and Functional Testing before dispatch.</p>
        </div>
      </div>
    </div>
  );
}