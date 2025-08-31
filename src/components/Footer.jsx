import React from "react";
import { avatar } from "@/lib/data";
import { Star } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="py-8 md:py-12 lg:py-16 grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand section - full width on mobile */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">SettleUP</h3>
              <p className="text-base md:text-lg leading-relaxed">
                The smartest way to split expenses with friends. Track, split,
                and settle up with complete ease.
              </p>
            </div>

            
            <div className="space-y-3">
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
                <div className="flex gap-1 mt-1">
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

          {/* Links sections - 2 columns on mobile, then responsive */}
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8 md:contents lg:contents">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Security", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`#`}
                        className="hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#`}
                      className="hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 md:col-start-1 lg:col-start-auto">
            <h4 className="font-bold text-white text-lg">Support</h4>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Community",
                "Status",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#`}
                    className="hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-800 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center lg:text-left">
              © {new Date().getFullYear()} SettleUP. All rights reserved. We
              split the bills, not the bonds. ❤️
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
