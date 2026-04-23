import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | LendSmart Mortgages Website Use",
  description: "Read the terms and conditions governing the use of the LendSmart Mortgages website, services, loan enquiries, and electronic communications.",
};

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last Updated: April 2026</p>

        {terms.map((section, i) => (
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

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: "By using this website, you agree to these terms.",
  },
  {
    title: "2. General Information Only",
    content:
      "Content is for general information only and not financial advice.",
  },
  {
    title: "3. No Guarantee",
    content:
      "Loan approval depends on lender criteria and is not guaranteed.",
  },
  {
    title: "4. Accuracy",
    content: "We aim for accuracy but information may change.",
  },
  {
    title: "5. User Responsibilities",
    content: "Provide correct information and do not misuse the website.",
  },
  {
    title: "6. Liability",
    content: "We are not liable for losses arising from website use.",
  }, 
];