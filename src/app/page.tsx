"use client";

import { useRef, useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import {
  AboutIcon,
  CertificationsIcon,
  ContactIcon,
  MenuBarCloseIcon,
  MenuBarIcon,
  ScrollTopIcon,
  SkillsIcon,
  ExperienceIcon,
  ProjectsIcon,
} from "./components/Icons";
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
import { useRouter } from "next/navigation";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Delay navigation until scroll finishes (roughly 500ms)
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Smooth scroll helper function (optional offset for fixed navbar height)
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // If you want to offset for fixed navbar height (e.g., 64px)
      const yOffset = -64; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-900 text-white font-sans box-border overflow-x-hidden"
    >
      <ParticlesBackground />
      <CustomCursor containerRef={containerRef} />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-700/50 backdrop-blur-sm z-20 shadow-lg box-border rounded-2xl z-index-30">
        <div className="px-4 sm:px-4 lg:pl-10 lg:pr-1 w-full">
          <div className="flex items-center h-16 w-full">
            {/* Animated Name */}
            <button
              onClick={() => {
                const element = document.getElementById("hero");
                if (element) {
                  const yOffset = -64;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="text-3xl font-bold tracking-tight text-blue-400 pulse-glow focus:outline-none"
              aria-label="Scroll to Hero Section"
              type="button"
            >
              Prudhvi Akula
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center justify-end space-x-4 ml-auto rounded-full bg-gray-900/50 backdrop-blur-sm px-4 py-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mirror-hover transform transition-all duration-300 ease-in-out hover:scale-125 hover:bg-gray-800/60 flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 rounded-full"
                  aria-label={`Navigate to ${item.label} section`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(item.href.replace("#", ""));
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center ml-auto mr-0 md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-400 focus:outline-none cursor-hover-trigger"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMenuOpen ? (
                  <MenuBarCloseIcon className="w-8 h-8 mirror-hover" />
                ) : (
                  <MenuBarIcon className="w-8 h-8 mirror-hover" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm absolute top-16 right-0 max-w-xs rounded-lg shadow-lg z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-center text-gray-300 hover:text-blue-400 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 text-lg font-semibold"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        smoothScrollTo(item.href.replace("#", ""));
                      }}
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
          <ScrollTopIcon className="w-6 h-6 transition-transform duration-500" />
        </button>
      )}

      {/* Spline Scene – larger canvas, hidden watermark */}
      <div className="pointer-events-none fixed bottom-[-5px] left-0 w-60 h-60 overflow-hidden z-10 hidden md:block">
        <Spline
          scene="https://prod.spline.design/H047VOPvpjtdl-R0/scene.splinecode"
          style={{ position: "absolute", width: "290px", height: "290px", left: "10px" }}
        />
      </div>
    </div>
  );
}
