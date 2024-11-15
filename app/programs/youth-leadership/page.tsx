"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function YouthLeadershipProgram() {
  return (
    <motion.div 
      layoutId="program-Youth Leadership Program"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        <motion.div className="space-y-4 sm:space-y-6">
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center"
          >
            <Users className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Youth Leadership Program</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Our flagship program empowers young leaders with the skills, knowledge, and confidence 
            to make positive changes in their communities. Through workshops, mentoring, and 
            hands-on projects, participants develop essential leadership capabilities.
          </p>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">What You&apos;ll Learn</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-600">
              <li>• Strategic thinking and decision-making</li>
              <li>• Effective communication and public speaking</li>
              <li>• Project management and organization</li>
              <li>• Team building and collaboration</li>
              <li>• Community engagement strategies</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Brochure
            </Button>
          </div>
        </motion.div>
        
        <motion.div className="space-y-4 sm:space-y-6">
          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
            {/* Add program image or video here */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-6 rounded-xl bg-orange-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-base sm:text-lg text-gray-600">6 months</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-orange-50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-base sm:text-lg text-gray-600">Hybrid (Online & In-person)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 