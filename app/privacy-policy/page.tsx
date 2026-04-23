
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | LendSmart Mortgages Australia",
  description: "Learn how LendSmart Mortgages collects, uses, and protects your personal information in accordance with Australian privacy laws and lending regulations.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: April 2026</p>

        {sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
          </div>
        ))}

         <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>

            <p className="text-gray-600 whitespace-pre-line">Email: <a href="mailto:admin@lendsmart.com.au" className="text-blue-500 hover:underline">admin@lendsmart.com.au</a></p>
            <p className="text-gray-600 whitespace-pre-line">Phone: <a href="tel:0413206624" className="text-blue-500 hover:underline">0413 206 624</a></p>
          </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "1. Introduction",
    content:
      "LendSmart Mortgages respects your privacy and is committed to protecting your personal information in accordance with Australian law.",
  },
  {
    title: "2. Information We Collect",
    content:
      "Full name, phone number, email, address, financial and employment information, loan preferences.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Assess loan eligibility, provide services, communicate with lenders, improve services.",
  },
  {
    title: "4. Disclosure of Information",
    content:
      "We may share information with banks, lenders, financial institutions, and regulators.",
  },
  {
    title: "5. Cookies & Analytics",
    content:
      "We use cookies to improve user experience and analyze traffic.",
  },
  {
    title: "6. Data Security",
    content:
      "We take reasonable steps to protect your data, but no system is 100% secure.",
  }, 
];