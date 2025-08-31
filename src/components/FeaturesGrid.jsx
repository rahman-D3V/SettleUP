import React from 'react'
import { Badge } from './ui/badge'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { FEATURES } from '@/lib/data'
import { CometCard } from './ui/comet-card'

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-10 mb-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-6"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Everything you need in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                one place
              </span>
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
              From basic splitting to advanced analytics, we've got every
              scenario covered.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }, index) => (
              <div className={`${index > 2 && 'hidden md:block'}`} key={index}>
                <CometCard>
                <Card
                  key={title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white animate-in fade-in slide-in-from-bottom "
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div
                      className={`mx-auto w-20 h-20 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className={`h-10 w-10 ${color}`} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CometCard>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturesGrid