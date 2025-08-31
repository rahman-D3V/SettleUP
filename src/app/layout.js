import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


export const metadata = {
  title: "SettleUP",
  description: "Easily split bills, track expenses, and settle up with friends hassle-free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          <ClerkProvider>
            <ConvexClientProvider>
              <Header/>
              
              <div className="min-h-screen">
                {children}
                <Toaster richColors/>
              </div>

            </ConvexClientProvider>
          </ClerkProvider>
        </main>
      </body>
    </html>
  );
}
