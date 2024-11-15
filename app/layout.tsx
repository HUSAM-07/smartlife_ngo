"use client";

import "./globals.css";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <Link href="/" className="group flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col"
                >
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Smart Life Foundation
                  </h1>
                  <span className="text-xs sm:text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Youth Wing
                  </span>
                </motion.div>
              </Link>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/programs" 
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 
                           transition-colors text-xs sm:text-sm font-medium"
                >
                  Our Programs
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <main data-lenis-prevent={false} className="pt-16 sm:pt-20">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
