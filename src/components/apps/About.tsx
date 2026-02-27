import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

interface AboutProps {
  isDark: boolean;
}

import { MacOSHero } from "./HeroSection";

const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Vikrantz01",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/vikrant-suman-b03228334/",
    label: "LinkedIn",
  },
  { icon: Mail, url: "mailto:vikranteditz26@gmail.com", label: "Email" },
];

const STATS = [
  { label: "Projects", value: "20+" },
  { label: "Internships", value: "1" },
  { label: "SGPA", value: "7.8" },
  { label: "Tech Stack", value: "20+" },
];

export function About({ isDark }: AboutProps) {
  return (
    <div
      className={`w-full h-full overflow-auto ${isDark ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
    >
      {/* Hero Section */}
      <div className="relative">
        <MacOSHero isDark={isDark} />

        {/* Profile Section */}
        <div className="px-6 pb-6">
          <div className="relative -mt-16 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-32 h-32 rounded-2xl border-4 ${
                isDark
                  ? "border-[#0a0a0a] bg-[#1e1e1e]"
                  : "border-gray-50 bg-white"
              } flex items-center justify-center overflow-hidden shadow-xl`}
            >
              <div
                className={`w-full h-full flex items-center justify-center text-4xl font-bold ${
                  isDark
                    ? "bg-gradient-to-br from-[#012042] to-[#55047e] text-white"
                    : "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                }`}
              >
                <img
                  src="/photo/Me.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Vikrant Suman
            </h1>
            <p
              className={`text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}
            >
              Frontend Developer
            </p>
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-3"
          >
            <div
              className={`flex items-center gap-1 text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}
            >
              <MapPin className="w-4 h-4" />
              <span>Madhya Pradesh, India</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Open to work</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>BCA</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mt-4"
          >
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white hover:scale-105"
                      : "bg-black/10 hover:bg-black/20 text-gray-700 hover:scale-105"
                  }`}
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-6 p-5 rounded-2xl ${
              isDark ? "bg-white/5" : "bg-white"
            }`}
            style={{
              border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <h2
              className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              About Me
            </h2>
            <p
              className={`leading-relaxed ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
              Hi, I’m a passionate programmer who enjoys building modern and smart digital solutions. I work on web development and AI-based projects, creating responsive websites, chat apps, and intelligent systems that solve real-world problems.
            </p>
            <p
              className={`leading-relaxed mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
             Currently, I’m exploring Artificial Intelligence and full-stack development while continuously improving my skills through hands-on projects. I believe in combining creativity with technology to build meaningful and impactful digital experiences. 🚀
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`p-4 rounded-2xl text-center ${
                  isDark ? "bg-white/5" : "bg-white"
                }`}
                style={{
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
                }}
              >
                <div
                  className={`text-2xl font-bold ${isDark ? "text-[#007aff]" : "text-blue-600"}`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm mt-1 ${isDark ? "text-white/50" : "text-gray-500"}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`mt-6 p-5 rounded-2xl ${
              isDark ? "bg-white/5" : "bg-white"
            }`}
            style={{
              border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <h2
              className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-[#007aff]/20" : "bg-blue-100"
                  }`}
                >
                  <GraduationCap
                    className={`w-5 h-5 ${isDark ? "text-[#007aff]" : "text-blue-600"}`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    BCA - Bachelor of Computer Applications
                  </h3>
                  <p
                    className={`text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}
                  >
                    Makanlal Chaturvedi University, Madhya Pradesh
                  </p>
                  <p
                    className={`text-sm ${isDark ? "text-white/40" : "text-gray-500"}`}
                  >
                    SGPA: 7.8 
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-[#34c759]/20" : "bg-green-100"
                  }`}
                >
                  <Award
                    className={`w-5 h-5 ${isDark ? "text-[#34c759]" : "text-green-600"}`}
                  />
                </div>
                <div>
                  <h3
                    className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    12th Grade - Ggriculture
                  </h3>
                  <p
                    className={`text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}
                  >
                    GOVT. School Palachourai
                  </p>
                  <p
                    className={`text-sm ${isDark ? "text-white/40" : "text-gray-500"}`}
                  >
                    Percentage: 65% | MP Borad Bhopal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`mt-6 p-5 rounded-2xl ${
              isDark ? "bg-white/5" : "bg-white"
            }`}
            style={{
              border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <h2
              className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Achievements
            </h2>
            <ul
              className={`space-y-3 ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
              <li className="flex items-start gap-2">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-[#007aff]" : "bg-blue-500"}`}
                />
                <span>
                  JavaScript Fundamentals course from GreatStack!
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-[#007aff]" : "bg-blue-500"}`}
                />
                <span>
                  MERN Development certification from Infosys Springboard.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-[#007aff]" : "bg-blue-500"}`}
                />
                <span>
                  Google Cloud’s Introduction to Generative AI Studio.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
