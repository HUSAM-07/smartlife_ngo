"use client";

import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, Target, HandHeart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type FeatureColor = "orange" | "blue" | "red" | "yellow" | "purple" | "green";
type FeatureSize = "large" | "medium" | "small";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  color: FeatureColor;
  size: FeatureSize;
  href: string;
}

const features: Feature[] = [
  {
    title: "Youth Leadership",
    description: "Empowering young leaders with skills and knowledge for positive community impact.",
    icon: Users,
    color: "orange",
    size: "large",
    href: "/programs/youth-leadership"
  },
  {
    title: "Skill Development",
    description: "Building essential skills for the future workforce through hands-on training.",
    icon: GraduationCap,
    color: "blue",
    size: "medium",
    href: "/programs/digital-skills"
  },
  {
    title: "Community Impact",
    description: "Creating lasting change through youth-led community initiatives.",
    icon: Heart,
    color: "red",
    size: "small",
    href: "/programs/community-service"
  },
  {
    title: "Mentorship",
    description: "Connecting youth with experienced mentors for guidance and growth.",
    icon: HandHeart,
    color: "purple",
    size: "large",
    href: "/programs/mentorship"
  },
  {
    title: "Innovation",
    description: "Fostering creative solutions to community challenges.",
    icon: Lightbulb,
    color: "yellow",
    size: "small",
    href: "/programs/entrepreneurship"
  },
  {
    title: "Goal Setting",
    description: "Helping youth define and achieve their personal and professional goals.",
    icon: Target,
    color: "green",
    size: "medium",
    href: "/programs/environmental"
  }
];

const colorVariants: Record<FeatureColor, string> = {
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-yellow-100 text-yellow-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-16 sm:mb-24 max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Your{' '}
            <span className="text-blue-600">personalized</span>{' '}
            journey for growth
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Embark on a journey towards inner peace, balance and 
            self-discovery through our innovative youth programs
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8 rounded-2xl"
              onClick={() => router.push('/programs')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-200 hover:bg-gray-50 text-lg py-6 px-8 rounded-2xl"
              onClick={() => router.push('/about')}
            >
              Learn More
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((id) => (
                <motion.div
                  key={id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * id }}
                  className="border-2 border-white rounded-full"
                >
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src={`/avatars/avatar-${id}.jpg`} alt={`Team member ${id}`} />
                    <AvatarFallback>YW</AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Join <span className="font-semibold text-gray-900">200+ youth leaders</span> already making an impact
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 mb-4 sm:mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <span className="text-3xl sm:text-4xl font-bold">12+</span>
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600">Evidence-based therapy methods available.</p>
          </motion.div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-4xl font-bold">200+</span>
            </motion.div>
            <p className="text-gray-600">Therapists available for personal appointments.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 lg:col-span-1 sm:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                <HandHeart className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-4xl font-bold">4.8★</span>
            </motion.div>
            <p className="text-gray-600">Excellent customer reviews on App Store.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(feature.href)}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${colorVariants[feature.color]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
