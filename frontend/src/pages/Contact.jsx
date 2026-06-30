// src/pages/Contact.jsx
import React from "react";
import RFQForm from "../components/RFQForm";

const locations = [
  {
    name: "Pune",
    address: "Chakan MIDC, Phase-III, Pune – 410501",
    phone: "+91 20 1234 5678",
    email: "pune@frontlineelectronics.com"
  },
  {
    name: "Bengaluru",
    address: "Bommasandra Industrial Area, Bengaluru – 560099",
    phone: "+91 80 2345 6789",
    email: "bangalore@frontlineelectronics.com"
  },
  {
    name: "Manesar",
    address: "IMT Manesar, Gurugram – 122051",
    phone: "+91 124 3456 7890",
    email: "manesar@frontlineelectronics.com"
  }
];

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team for inquiries, quotes, or partnership opportunities
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {locations.map((loc) => (
          <div key={loc.name} className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900">{loc.name}</h3>
            <p className="mt-3 text-gray-600">{loc.address}</p>
            <p className="mt-2 text-gray-600">📞 {loc.phone}</p>
            <p className="text-gray-600">✉️ {loc.email}</p>
          </div>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <RFQForm />
        </div>
        <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
          <p className="text-gray-500">📍 Map Integration Here</p>
          {/* You can embed Google Maps iframe here */}
        </div>
      </div>
    </div>
  );
}