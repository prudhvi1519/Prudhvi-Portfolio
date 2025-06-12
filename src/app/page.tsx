"use client";

import { useRef, useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AboutIcon, CertificationsIcon, ContactIcon, MenuBarCloseIcon, MenuBarIcon, ScrollTopIcon, SkillsIcon, ExperienceIcon, ProjectsIcon } from "./components/Icons";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import LeadershipSection from "./components/sections/LeadershipSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import { NavItem } from "./types";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems: NavItem[] = [
    { href: "#about", label: "About", icon: <AboutIcon className="w-5 h-5 mr-1" /> },
    { href: "#skills", label: "Skills", icon: <SkillsIcon className="w-5 h-5 mr-1" /> },
    { href: "#experience", label: "Experience", icon: <ExperienceIcon className="w-5 h-5 mr-1" /> },
    { href: "#projects", label: "Projects", icon: <ProjectsIcon className="w-5 h-5 mr-1" /> },
    { href: "#certifications", label: "Certifications", icon: <CertificationsIcon className="w-5 h-5 mr-1" /> },
    { href: "#contact", label: "Contact", icon: <ContactIcon className="w-5 h-5 mr-1" /> },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 text-white font-sans box-border overflow-x-hidden">
      <ParticlesBackground />
      <CustomCursor containerRef={containerRef} />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-lg z-20 shadow-lg box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16 w-full">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight text-blue-400">Prudhvi Akula</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md cursor-hover-trigger transition-colors duration-300"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-400 focus:outline-none cursor-hover-trigger"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMenuOpen ? (
                  <MenuBarCloseIcon className="w-8 h-8" />
                ) : (
                  <MenuBarIcon className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-lg absolute top-16 left-0 w-full shadow-lg z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md cursor-hover-trigger transition-colors duration-300 text-lg font-semibold"
                      aria-label={`Navigate to ${item.label} section`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <LeadershipSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-30"
          aria-label="Scroll to top"
        >
          <ScrollTopIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
