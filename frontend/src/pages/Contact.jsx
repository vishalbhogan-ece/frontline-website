import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Request a Quote
        </h1>

        <p className="text-gray-600 mb-10">
          Contact Frontline Electronics for PCB Assembly, Box Build,
          Product Design, Testing and Electronics Manufacturing Services.
        </p>

        <ContactForm />

      </div>
    </div>
  );
}