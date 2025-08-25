import React from "react";
import { INTEGRATIONS } from "@/lib/data";
import { Badge, Globe } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";

const Integrations = () => {

   

  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-16">
          <Badge
            variant="outline"
            className="bg-indigo-50 text-indigo-700 border-indigo-200 mb-6"
          >
            <Globe className="w-4 h-4 mr-2" />
            Integrations
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Works with your{" "}
            <PointerHighlight containerClassName="inline-block mr-1">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                favorite apps
              </span>
            </PointerHighlight>
          </h2>
          <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
            Seamlessly connect with the payment methods you already use.
          </p>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {INTEGRATIONS.map(({ name, logo }, index) => (
            <div
              key={name}
              className="group flex items-center gap-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom d"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {logo}
              </div>
              <span className="font-semibold text-slate-700 text-lg">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
