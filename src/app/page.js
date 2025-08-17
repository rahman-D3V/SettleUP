// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col pt-16">
//       {/* ───── Hero ───── */}
//       <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
//         <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Split expenses. Simplify life.
//           </Badge>

//           <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
//             The smartest way to split expenses with friends
//           </h1>

//           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Track shared expenses, split bills effortlessly, and settle up
//             quickly. Never worry about who owes who again.
//           </p>

//           <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
//             <Button
//               asChild
//               size="lg"
//               className="bg-green-600 hover:bg-green-700"
//             >
//               <Link href="/dashboard">
//                 Get Started
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-green-600 text-green-600 hover:bg-green-50"
//             >
//               <Link href="#how-it-works">See How It Works</Link>
//             </Button>
//           </div>
//         </div>

//         <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
//           <div className="gradient p-1 aspect-[16/9]">
//             <Image
//               src="/hero.png"
//               width={1280}
//               height={720}
//               alt="Banner"
//               className="rounded-lg mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       {/* ───── Features ───── */}
//       <section id="features" className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Features
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Everything you need to split expenses
//           </h2>
//           <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Our platform provides all the tools you need to handle shared
//             expenses with ease.
//           </p>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {FEATURES.map(({ title, Icon, bg, color, description }) => (
//               <Card
//                 key={title}
//                 className="flex flex-col items-center space-y-4 p-6 text-center"
//               >
//                 <div className={`rounded-full p-3 ${bg}`}>
//                   <Icon className={`h-6 w-6 ${color}`} />
//                 </div>

//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="text-gray-500">{description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── How it works ───── */}
//       <section id="how-it-works" className="py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             How It Works
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Splitting expenses has never been easier
//           </h2>
//           <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
//             Follow these simple steps to start tracking and splitting expenses
//             with friends.
//           </p>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
//             {STEPS.map(({ label, title, description }) => (
//               <div key={label} className="flex flex-col items-center space-y-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
//                   {label}
//                 </div>
//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="text-gray-500 text-center">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── Testimonials ───── */}
//       <section className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Badge variant="outline" className="bg-green-100 text-green-700">
//             Testimonials
//           </Badge>
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             What our users are saying
//           </h2>

//           <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {TESTIMONIALS.map(({ quote, name, role, image }) => (
//               <Card key={name} className="flex flex-col justify-between">
//                 <CardContent className="space-y-4 p-6">
//                   <p className="text-gray-500">{quote}</p>
//                   <div className="flex items-center space-x-3">
//                     <Avatar>
//                       {/* Placeholder avatar */}
//                       <AvatarImage src={image} alt={name} />
//                       <AvatarFallback className="uppercase">
//                         {name.charAt(0)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="text-left">
//                       <p className="text-sm font-medium">{name}</p>
//                       <p className="text-sm text-muted-foreground">{role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───── Call‑to‑Action ───── */}
//       <section className="py-20 gradient">
//         <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
//           <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
//             Ready to simplify expense sharing?
//           </h2>
//           <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
//             Join thousands of users who have made splitting expenses
//             stress‑free.
//           </p>
//           <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
//             <Link href="/dashboard">
//               Get Started
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       {/* ───── Footer ───── */}
//       <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
//         © {new Date().getFullYear()} Splitr. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Heart,
  Award,
  MessageSquare,
  BarChart3,
  Calendar,
  Smartphone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { Cover } from "@/components/ui/cover";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ColourfulText } from "@/components/ui/colourful-text";
import { CometCard } from "@/components/ui/comet-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

// Enhanced data structures
const STATS = [
  { number: "50,000+", label: "Active Users", icon: Users },
  { number: "€2.3M+", label: "Split Successfully", icon: DollarSign },
  { number: "99.9%", label: "Uptime", icon: TrendingUp },
  { number: "24/7", label: "Support", icon: Clock },
];

const ADVANCED_FEATURES = [
  {
    title: "Smart Receipt Scanning",
    description:
      "Automatically extract expense details from photos using AI-powered OCR technology.",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Multi-Currency Support",
    description:
      "Handle expenses in any currency with real-time exchange rate conversion.",
    icon: Globe,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Advanced Analytics",
    description:
      "Get insights into your spending patterns with beautiful charts and reports.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Recurring Expenses",
    description:
      "Set up monthly subscriptions and recurring bills to split automatically.",
    icon: Calendar,
    gradient: "from-orange-500 to-red-400",
  },
];

const INTEGRATIONS = [
  { name: "PayPal", logo: "💳" },
  { name: "Venmo", logo: "💸" },
  { name: "Bank Transfer", logo: "🏦" },
  { name: "Apple Pay", logo: "📱" },
  { name: "Google Pay", logo: "💰" },
  { name: "Stripe", logo: "💎" },
];

const USE_CASES = [
  {
    title: "Travel with Friends",
    description: "Split hotel, food, and activity costs during group trips",
    emoji: "✈️",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    title: "Roommate Expenses",
    description: "Manage rent, utilities, and household purchases effortlessly",
    emoji: "🏠",
    color: "bg-green-50 border-green-200 text-green-700",
  },
  {
    title: "Dinner Parties",
    description: "Split restaurant bills and party expenses with ease",
    emoji: "🍽️",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    title: "Team Events",
    description: "Handle office lunches and team building activities",
    emoji: "👥",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "0",
    period: "Forever free",
    description: "Perfect for small groups and casual use",
    features: [
      "Up to 5 group members",
      "Unlimited expenses",
      "Basic splitting options",
      "Mobile app access",
      "Email support",
    ],
    popular: false,
    buttonText: "Get Started Free",
    gradient: "from-slate-50 to-slate-100",
  },
  {
    name: "Pro",
    price: "9",
    period: "per month",
    description: "Best for frequent group activities and power users",
    features: [
      "Unlimited group members",
      "Advanced splitting rules",
      "Receipt scanning with AI",
      "Multi-currency support",
      "Export to Excel/PDF",
      "Priority support",
      "Custom categories",
      "Advanced analytics",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    gradient: "from-emerald-50 to-emerald-100",
  },
  {
    name: "Teams",
    price: "19",
    period: "per month",
    description: "For businesses and large organizations",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Advanced reporting",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Single sign-on (SSO)",
      "Advanced security controls",
    ],
    popular: false,
    buttonText: "Contact Sales",
    gradient: "from-purple-50 to-purple-100",
  },
];

const FAQ_DATA = [
  {
    question: "How does Splitr handle privacy and security?",
    answer:
      "We use bank-level encryption (AES-256) for all data transmission and storage. We never store your banking credentials and follow strict privacy policies. Your financial data is completely secure with us.",
  },
  {
    question: "Can I use Splitr without an internet connection?",
    answer:
      "Yes! You can add expenses and view your data offline. All changes will automatically sync when you reconnect to the internet, ensuring you never lose any information.",
  },
  {
    question: "What payment methods does Splitr support?",
    answer:
      "Splitr integrates with major payment platforms including PayPal, Venmo, bank transfers, Apple Pay, Google Pay, and Stripe. You can settle debts directly through the app using your preferred method.",
  },
  {
    question: "Is there a limit to the number of expenses I can track?",
    answer:
      "No limits! All plans include unlimited expense tracking. Whether you're splitting a coffee bill or managing a month-long trip with friends, Splitr scales with your needs.",
  },
  {
    question: "How accurate is the receipt scanning feature?",
    answer:
      "Our AI-powered receipt scanning has 95%+ accuracy rate. It can extract amounts, dates, merchant names, and even individual items from receipts. You can always review and edit the extracted data before saving.",
  },
  {
    question: "Can I export my expense data?",
    answer:
      "Yes! Pro and Teams users can export their data to Excel, PDF, or CSV formats. This is perfect for tax purposes, reimbursements, or keeping personal records.",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16 overflow-hidden">
      {/* ───── Hero Section with Enhanced Visual Elements ───── */}
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-600 mt-16 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                  </div>
                </div>

                <div className="font-semibold text-slate-700">
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
                  alt="Splitr Dashboard - Beautiful expense tracking interface"
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

      {/* ───── Stats Section ───── */}
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

      {/* ───── Use Cases Section ───── */}
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
                , Splitr makes money simple.
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

          {/* Additional decorative bottom section */}
          <div className="text-center mt-20 animate-in fade-in duration-1000 delay-1000">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-purple-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  ></div>
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

      {/* ───── Advanced Features Section ───── */}
      {/* <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Advanced Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Powered by <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI & Intelligence</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
              Next-generation features that make expense splitting feel like magic.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {ADVANCED_FEATURES.map(({ title, description, icon: Icon, gradient }, index) => (
              <Card 
                key={title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* ───── Enhanced Features Grid ───── */}
      <section id="features" className="py-24 bg-white">
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
              <CometCard>
                <Card
                  key={title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white animate-in fade-in slide-in-from-bottom duration-1000"
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
            ))}
          </div>
        </div>
      </section>

      {/* ───── How It Works with Enhanced Design ───── */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-b from-slate-50 to-white"
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

          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-3 relative">
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

                {index < STEPS.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-8 top-12 w-6 h-6 text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Integrations Section ───── */}
      <section className="py-24 bg-white">
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

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {INTEGRATIONS.map(({ name, logo }, index) => (
              <div
                key={name}
                className="group flex items-center gap-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-1000"
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

      {/* ───── Enhanced Pricing Section ───── */}
      {/* <section className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-16 space-y-6">
      <div className="space-y-4">
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
          <DollarSign className="w-4 h-4 mr-2" />
          Simple Pricing
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Choose your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">perfect plan</span>
        </h2>
      </div>
      <p className="mx-auto max-w-[600px] text-slate-600 text-lg leading-relaxed">
        Start free forever. Upgrade only when you need advanced features.
      </p>
    </div>

    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
      {PRICING_TIERS.map((tier, index) => (
        <Card 
          key={tier.name} 
          className={`relative group hover:shadow-xl transition-all duration-300 overflow-hidden ${
            tier.popular 
              ? 'border-2 border-emerald-500 shadow-lg scale-105' 
              : 'border border-slate-200 shadow-md hover:border-slate-300'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {tier.popular && (
            <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
              Most Popular Choice
            </div>
          )}
          
          <div className={`p-8 ${tier.popular ? 'pt-16' : 'pt-8'} space-y-6`}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-slate-900">${tier.price}</span>
                  <span className="text-slate-500">{tier.period}</span>
                </div>
                
                {tier.price === "0" && (
                  <div className="inline-block">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Forever Free
                    </Badge>
                  </div>
                )}
              </div>
              
              <p className="text-slate-600 leading-relaxed">{tier.description}</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                {tier.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
                {tier.features.length > 6 && (
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    </div>
                    <span className="text-slate-500 italic">
                      Plus {tier.features.length - 6} more advanced features
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <Button 
                className={`w-full py-3 font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-md' 
                    : 'bg-slate-900 hover:bg-slate-800 shadow-md'
                }`}
              >
                {tier.buttonText}
              </Button>
              
              {tier.price !== "0" && (
                <p className="text-center text-sm text-slate-500">
                  14-day free trial • No commitment
                </p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>

    <div className="text-center mt-16 space-y-6">
      <div className="space-y-4">
        <p className="text-slate-600 text-lg">
          All plans include unlimited expenses and 24/7 support
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-500" />
            <span>Available worldwide</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-purple-500" />
            <span>Priority support included</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      {/* ───── Enhanced Testimonials ───── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-yellow-50 text-yellow-700 border-yellow-200 mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Customer Love
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Loved by{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                thousands
              </span>{" "}
              worldwide
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 text-xl leading-relaxed">
              See what our amazing community has to say about their Splitr
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

      {/* ───── Enhanced FAQ Section ───── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200 mb-6"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Got{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              Everything you need to know about Splitr. Can't find what you're
              looking for?
              <Link
                href="/contact"
                className="text-emerald-600 hover:underline font-semibold ml-2"
              >
                Contact our friendly support team →
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            {FAQ_DATA.map((faq, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-xl font-bold text-slate-900 pr-4 group-hover:text-emerald-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="text-emerald-600 group-open:rotate-45 transition-transform duration-300">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Enhanced Final CTA Section ───── */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Enhanced background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Ready to make money <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  simple again?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Join over 50,000 users who have simplified their shared
                expenses.
                <br />
                <span className="font-bold text-white">
                  Start free today, upgrade when you're ready.
                </span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-50 shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold text-xl px-12 py-6 group"
              >
                <Link href="/dashboard">
                  Start Free Forever
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-3 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold text-xl px-12 py-6"
              >
                <Link href="/demo">
                  <Star className="mr-2 h-6 w-6 fill-yellow-300 text-yellow-300" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="pt-8 space-y-6">
              <p className="text-blue-100 text-lg">
                ✨ No credit card required • ⚡ Setup in under 30 seconds • 🔒
                Bank-level security
              </p>

              {/* Enhanced trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Bank-level encryption</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">Available worldwide</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">30-day money back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Enhanced Footer ───── */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main footer content */}
          <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Splitr</h3>
                <p className="text-lg leading-relaxed max-w-md">
                  The smartest way to split expenses with friends. Track, split,
                  and settle up with complete ease.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 border-2 border-slate-900"
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Trusted by 50,000+ users
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Security", "API", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="hover:text-emerald-400 transition-colors duration-300 text-lg"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Company</h4>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Press", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="hover:text-emerald-400 transition-colors duration-300 text-lg"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Support</h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Community",
                  "Status",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-emerald-400 transition-colors duration-300 text-lg"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-slate-800 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Splitr. All rights reserved. Made
                with ❤️ for better friendships.
              </p>
              <div className="flex items-center gap-6 text-slate-400">
                <Link
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <BackgroundBeams /> */}
      </footer>
    </div>
  );
}
