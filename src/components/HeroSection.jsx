import React from 'react'
import { Badge } from './ui/badge'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { ColourfulText } from './ui/colourful-text'
import { Cover } from './ui/cover'
import { Button } from './ui/button'
import Link from 'next/link'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Image from 'next/image'
import { people } from '@/lib/data'

const HeroSection = () => {
  return (
    <section className="relative mt-20 pb-20 space-y-16 px-5">
        {/* Dynamic background with multiple floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center space-y-10">
          {/* Announcement badge with animation */}
          <div className="animate-in fade-in slide-in-from-top duration-1000">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 border-emerald-200 hover:shadow-lg transition-all duration-300 px-4 py-2"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-spin" />
              New: AI-Powered Receipt Scanning is here! 🎉
            </Badge>
          </div>

          {/* Enhanced hero title with better typography */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h1 className="mx-auto max-w-7xl text-5xl font-black md:text-7xl lg:text-8xl leading-tight tracking-tight">
              The{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <ColourfulText text="smartest" />
                </span>
              </span>{" "}
              way to
              <br />
              <span className="bg-gradient-to-r  from-slate-900 to-slate-700 bg-clip-text text-transparent">
                split{" "}
                <span className="text-[70px]">
                  <Cover>expenses</Cover>{" "}
                </span>
              </span>
            </h1>
          </div>

          {/* Enhanced description */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <p className="mx-auto max-w-[800px] text-xl text-slate-600 leading-relaxed md:text-2xl/relaxed">
              Track shared expenses, split bills effortlessly, and settle up
              instantly. Join{" "}
              <span className="font-bold text-emerald-600">50,000+ users</span>{" "}
              who never worry about money between friends again.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
            <div className="flex flex-col items-center gap-6 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-4 text-lg font-semibold"
              >
                <Link href="/dashboard">
                  Start Free Forever
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 px-8 py-4 text-lg font-medium"
              >
                <Link href="#demo">
                  <Star className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              ✨ No credit card required • ⚡ Setup in 30 seconds • 🔒
              Bank-level security
            </p>
          </div>

          {/* Enhanced social proof */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-600 mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg ">
              
              <div className="flex items-center gap-8">


                <div className="flex -space-x-3 bg-red-400 h-1 ">
                  <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                  </div>
                </div>

                <div className="font-semibold text-slate-700 ">
                  Trusted by <span className="text-emerald-600">50,000+</span>{" "}
                  users worldwide
                </div>
              </div>


              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-slate-700">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced hero image with floating elements */}
        <div className="container mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom duration-1500 delay-1000">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group">
              <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 p-2">
                <Image
                  src="/hero.png"
                  width={1400}
                  height={800}
                  alt="SettleUP Dashboard - Beautiful expense tracking interface"
                  className="rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              New Features! 🚀
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-emerald-200">
              💳 Split in seconds
            </div>
            <div className="absolute top-1/4 -left-8 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg rotate-12">
              AI-Powered ✨
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection