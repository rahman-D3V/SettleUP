import React from "react";
import { avatar } from "@/lib/data";
import { Star } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">SettleUP</h3>
              <p className="text-lg leading-relaxed max-w-md">
                The smartest way to split expenses with friends. Track, split,
                and settle up with complete ease.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {avatar.map((item) => (
                  <div
                    key={item.id}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 border-2 border-slate-900"
                  >
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
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
              {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-emerald-400 transition-colors duration-300 text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
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
              © {new Date().getFullYear()} SettleUP. All rights reserved. We
              split the bills, not the bonds. ❤️
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
  );
};

export default Footer;
