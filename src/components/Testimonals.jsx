import React from "react";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TESTIMONIALS } from "@/lib/data";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Testimonals = () => {
  return (
    <section className="bg-white md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200 mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Customer Love
          </Badge>
          <h2  className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              <ContainerTextFlip
                animationDuration="700"
                words={["Thousands", "Millions", "Customers", "Users"]}
                interval="1500"
              />
            </span>{" "}
            worldwide
          </h2>
          <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
            See what our amazing community has to say about their SettleUP
            experience.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, image }, index) => (
            <Card
              key={name}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="space-y-6 p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-slate-600 leading-relaxed text-lg italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <Avatar className="border-3 border-emerald-100 w-12 h-12">
                    <AvatarImage src={image} alt={name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-lg">
                      {name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 text-lg">{name}</p>
                    <p className="text-slate-500">{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
