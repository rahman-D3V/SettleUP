import { STATS } from '@/lib/data'
import React from 'react'

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {STATS.map(({ number, label, icon: Icon }, index) => (
              <div
                key={label}
                className="text-center space-y-3 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {number}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StatsSection