import React from "react";
import RFQForm from "../components/RFQForm";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Manufacturing Locations
          </h2>

          <p>Pune Plant</p>
          <p>Bengaluru Plant</p>
          <p>Manesar Plant</p>

        </div>

        <RFQForm />

      </div>

    </div>
  );
}