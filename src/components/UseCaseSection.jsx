import React from "react";
import { Badge } from "./ui/badge";
import { Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { avatar1, USE_CASES } from "@/lib/data";

const UseCaseSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 text-4xl animate-bounce delay-500">
        ✨
      </div>
      <div className="absolute top-32 right-32 text-3xl animate-bounce delay-1000">
        💫
      </div>
      <div className="absolute bottom-20 left-32 text-3xl animate-bounce delay-1500">
        🌟
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Enhanced header section */}
        <div className="text-center mb-20 space-y-8">
          <div className="animate-in fade-in slide-in-from-top duration-1000">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 mb-8 px-6 py-3 text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <Heart className="w-5 h-5 mr-3 group-hover:animate-pulse text-pink-500" />
              Perfect For Every Occasion
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Badge>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-tight">
              Built for{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-gradient-x">
                  real life
                </span>
                <div className="absolute -bottom-4 left-0 right-0 h-6 bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-rose-400/50 -rotate-1 rounded-lg blur-sm"></div>
              </span>
            </h2>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <div className="mx-auto max-w-[800px]  text-slate-600 text-xl md:text-2xl leading-relaxed">
              Whether you're{" "}
              <span className="font-semibold text-purple-600 relative">
                traveling
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-purple-200/50 rounded"></div>
              </span>
              ,{" "}
              <span className="font-semibold text-pink-600 relative">
                living together
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-pink-200/50 rounded"></div>
              </span>
              , or just{" "}
              <span className="font-semibold text-rose-600 relative">
                hanging out
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-rose-200/50 rounded"></div>
              </span>
              , SettleUP makes money simple.
            </div>
          </div>

          {/* Add a separator with animation */}
          <div className="animate-in fade-in duration-1000 delay-600">
            <div className="mx-auto w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {USE_CASES.map(({ title, description, emoji, color }, index) => (
            <div
              key={title}
              className="group relative animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              {/* Floating glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-rose-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <Card
                className={`relative h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-2 ${color} group-hover:border-opacity-80 overflow-hidden backdrop-blur-sm`}
              >
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700"></div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-current rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-current rounded-full animate-ping delay-500"></div>
                </div>

                <CardContent className="relative p-10 text-center space-y-6 h-full flex flex-col justify-between">
                  {/* Enhanced emoji with multiple effects */}
                  <div className="relative">
                    <div className="text-7xl mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 filter drop-shadow-lg">
                      <span className="inline-block group-hover:animate-bounce">
                        {emoji}
                      </span>
                    </div>

                    {/* Pulsing ring around emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-purple-300/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                      {description}
                    </p>
                  </div>

                  {/* Animated bottom accent */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </CardContent>

                {/* Sparkle effects */}
                <div className="absolute top-6 right-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  ✨
                </div>
                <div className="absolute bottom-6 left-6 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-200">
                  💖
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* decorative bottom section */}
        <div className="text-center mt-20 animate-in fade-in duration-1000 delay-1000">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-purple-100">
            <div className="flex -space-x-2">
              {avatar1.map((item) => (
                <div
                  key={item.id}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 border-2 opacity-80"
                >
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <span className="text-slate-600 font-medium">
              Join thousands who split smarter
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
