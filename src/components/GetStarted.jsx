import React from 'react'
import { Badge } from './ui/badge'
import { Award } from 'lucide-react'
import { STEPS } from '@/lib/data'

const GetStarted = () => {
  return (
    <section
        id="how-it-works"
        className="md:py-24 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-orange-50 text-orange-700 border-orange-200 mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Get started in{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                3 simple steps
              </span>
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
              From setup to settlement, everything is designed to be intuitive
              and fast.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-3 relative ">
            {/* Enhanced connection lines */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-1 bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 rounded-full opacity-50"></div>

            {STEPS.map(({ label, title, description }, index) => (
              <div
                key={label}
                className="flex flex-col items-center text-center space-y-8 relative animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl shadow-2xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {label}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-4 max-w-xs">
                  <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>
                
                
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default GetStarted