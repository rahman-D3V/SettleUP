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
    question: "How does SettleUP's smart settlement algorithm work?",
    answer:
      "Our algorithm automatically calculates the most efficient way to settle debts within your group, minimizing the number of transactions needed. Instead of everyone paying everyone back individually, we determine the optimal payment flow so fewer people need to make transfers.",
  },
  {
    question: "Can I split expenses in different ways besides equally?",
    answer:
      "Absolutely! SettleUP supports multiple split types including equal splits, percentage-based splits, and exact amount splits. Whether someone ordered more food, used a bigger room, or contributed differently to shared expenses, you can customize the split to match the real situation.",
  },
  {
    question: "How do payment reminders work?",
    answer:
      "SettleUP sends automated, friendly reminders to group members who have outstanding balances. You can customize reminder frequency and tone, and the system provides insights on spending patterns to help everyone stay on top of shared expenses without awkward conversations",
  },
  {
    question: "Can I use SettleUP for different types of groups and events?",
    answer:
      "Yes! SettleUP works perfectly for travel with friends, roommate expenses, dinner parties, team events, and any group spending scenario. You can create separate groups for different occasions and manage multiple expense categories simultaneously.",
  },
  {
    question: "Do I see updates in real-time when expenses are added?",
    answer:
      "Yes, SettleUP provides real-time updates across all devices. The moment someone in your group adds an expense or makes a payment, everyone sees the changes instantly. This keeps everyone informed and prevents duplicate entries or confusion.",
  },
  {
    question: " Is there a limit to how many people can be in a group or how much money we can split?",
    answer:
      "No limits! SettleUP handles groups of any size and has successfully processed over €2.3M in split expenses. Whether it's a small dinner with 3 friends or a large team event with 50+ people, our platform scales to meet your needs with 99.9% uptime reliability.",
  },
];


const TESTIMONIALS = [
   {
    quote:
      "This app saved our friend group! No more awkward money talks after dinners or trips. Splitting bills is now effortless.",
    name: "Priya Sharma",
    role: "Marketing Manager",
  },
  {
    quote:
      "We planned a Europe trip with 8 friends, and it handled every expense beautifully. Settling up at the end was a breeze.",
    name: "Sophia Rodriguez",
    role: "Travel Blogger",
  },
  {
    quote:
      "As a startup founder, I use this with my small team for office lunches and shared costs. It keeps things transparent.",
    name: "David Kim",
    role: "Startup Founder",
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
      "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
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