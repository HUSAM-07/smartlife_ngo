"use client";

import { motion } from "framer-motion";

export default function ProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {children}
    </motion.div>
  );
} 