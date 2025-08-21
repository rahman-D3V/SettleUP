import React from "react";
import { MessageSquare } from "lucide-react";
import { FAQ_DATA } from "@/lib/data";


const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-blue-700 bg-blue-50 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Got{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about SettleUP. Can’t find the answer?{" "}
            <a
              href="/contact"
              className="text-emerald-600 hover:underline font-semibold"
            >
              Contact our support →
            </a>
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => (
            <details
              key={index}
              className="group border border-slate-200 rounded-lg overflow-hidden"
            >
              <summary className="cursor-pointer flex justify-between items-center text-lg font-semibold text-slate-900 p-5 hover:bg-slate-50 transition-colors duration-300">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="max-h-0 overflow-hidden transition-all duration-500 group-open:max-h-96 p-5 pt-0 text-slate-600 text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
