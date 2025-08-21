import { Bell, Clock, CreditCard, DollarSign, PieChart, Receipt, TrendingUp, Users } from "lucide-react";

const avatar = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/c5/22/f8/c522f8780ddfa3a1a2eb7a536c39f363.jpg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/72/b7/8f/72b78f48b101dd4e80fd5ec289917257.jpg",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];


const FAQ_DATA = [
  {
    question: "How does SettleUP handle privacy and security?",
    answer:
      "We use bank-level encryption (AES-256) for all data transmission and storage. We never store your banking credentials and follow strict privacy policies. Your financial data is completely secure with us.",
  },
  {
    question: "Can I use SettleUP without an internet connection?",
    answer:
      "Yes! You can add expenses and view your data offline. All changes will automatically sync when you reconnect to the internet, ensuring you never lose any information.",
  },
  {
    question: "What payment methods does SettleUP support?",
    answer:
      "SettleUP integrates with major payment platforms including PayPal, Venmo, bank transfers, Apple Pay, Google Pay, and Stripe. You can settle debts directly through the app using your preferred method.",
  },
  {
    question: "Is there a limit to the number of expenses I can track?",
    answer:
      "No limits! All plans include unlimited expense tracking. Whether you're splitting a coffee bill or managing a month-long trip with friends, SettleUP scales with your needs.",
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


const TESTIMONIALS = [
  {
    quote:
      "Ye babu rao ka style hai! With SettleUP, I finally stopped getting confused about who paid for what!",
    name: "Babu Rao",
    image: "/testimonials/babubhaiya.png",
    role: "Rental Property Manager",
  },
  {
    quote:
      "SettleUP's calculations are so accurate, they're even better than my scheme to double money in 25 days!",
    name: "Raju",
    image: "/testimonials/raju.jpg",
    role: "Stock Market Expert",
  },
  {
    quote:
      "If that I have SettleUP, Raju wont get away with selling my shoes and coat! I'll add to his debt!",
    name: "Shyam",
    image: "/testimonials/shyam.png",
    role: "Job Searcher",
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

const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your roommates, trip, or event and invite friends.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Record who paid and how the bill should be split amongst members.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "View who owes what and log payments when debts are cleared.",
  },
];

const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Create groups for roommates, trips, or events to keep expenses organized.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Our algorithm minimises the number of payments when settling up.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Track spending patterns and discover insights about your shared costs.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Automated reminders for pending debts and insights on spending patterns.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split equally, by percentage, or by exact amounts to fit any scenario.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      /* custom inline icon (no Lucide equivalent) */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "See new expenses and repayments the moment your friends add them.",
  },
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

const avatar1 = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/c5/22/f8/c522f8780ddfa3a1a2eb7a536c39f363.jpg",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/72/b7/8f/72b78f48b101dd4e80fd5ec289917257.jpg",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];


const STATS = [
  { number: "50,000+", label: "Active Users", icon: Users },
  { number: "€2.3M+", label: "Split Successfully", icon: DollarSign },
  { number: "99.9%", label: "Uptime", icon: TrendingUp },
  { number: "24/7", label: "Support", icon: Clock },
];

const people = [
  {
    id: 1,
    name: "Khabib",
    designation: "MMA Fighter",
    image:
      "https://i.pinimg.com/736x/c5/22/f8/c522f8780ddfa3a1a2eb7a536c39f363.jpg",
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
    name: "Tony Stark",
    designation: "Businessman",
    image:
      "https://i.pinimg.com/originals/72/b7/8f/72b78f48b101dd4e80fd5ec289917257.jpg",
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
    name: "SRK",
    designation: "Actor",
    image:
      "https://i0.wp.com/www.opindia.com/wp-content/uploads/2023/01/srk.jpg?resize=696%2C398&ssl=1",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];


export {avatar, FAQ_DATA, TESTIMONIALS, INTEGRATIONS, STEPS, FEATURES, USE_CASES, avatar1,STATS,people}