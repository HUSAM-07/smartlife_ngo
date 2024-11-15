'use client';

import { Users, Laptop, Heart, Lightbulb, UserPlus, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ProgramColor = "orange" | "blue" | "red" | "yellow" | "purple" | "green";
type ProgramSize = "large" | "medium" | "small";

interface Program {
  title: string;
  description: string;
  icon: React.ElementType;
  size: ProgramSize;
  color: ProgramColor;
  href: string;
}

const programs: Program[] = [
  {
    title: "Youth Leadership Program",
    description: "Empowering young leaders with skills and knowledge to make positive changes in their communities.",
    icon: Users,
    size: "large",
    color: "orange",
    href: "/programs/youth-leadership"
  },
  {
    title: "Digital Skills Training",
    description: "Equipping youth with essential digital skills for the modern workforce.",
    icon: Laptop,
    size: "medium",
    color: "blue",
    href: "/programs/digital-skills"
  },
  {
    title: "Community Service",
    description: "Engaging youth in meaningful community service projects.",
    icon: Heart,
    size: "small",
    color: "red",
    href: "/programs/community-service"
  },
  {
    title: "Entrepreneurship Workshop",
    description: "Teaching business skills and entrepreneurial mindset to young innovators.",
    icon: Lightbulb,
    size: "large",
    color: "yellow",
    href: "/programs/entrepreneurship"
  },
  {
    title: "Mentorship Program",
    description: "Connecting youth with experienced mentors for guidance and support.",
    icon: UserPlus,
    size: "small",
    color: "purple",
    href: "/programs/mentorship"
  },
  {
    title: "Environmental Initiative",
    description: "Leading environmental conservation projects and awareness campaigns.",
    icon: Leaf,
    size: "medium",
    color: "green",
    href: "/programs/environmental"
  }
];

const colorVariants: Record<ProgramColor, string> = {
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-yellow-100 text-yellow-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
};

export default function Programs() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3 sm:gap-4 items-start max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Programs
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Choose from our range of personalized programs designed to support your growth journey
          </p>
        </motion.header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                layoutId={`program-${program.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(program.href)}
                className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 
                          hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${colorVariants[program.color]} 
                            flex items-center justify-center mb-4 sm:mb-6`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 group-hover:text-blue-600 
                             transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}