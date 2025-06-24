import { motion } from "framer-motion";
import AnimatedProfileImage from "../AnimatedProfileImage";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Prudhvi Akula";

  // Continuous typing animation effect
  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const typeText = () => {
      if (!isMounted) return;

      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100); // Typing speed (100ms per character)
      } else {
        // Pause after typing completes
        setTimeout(() => {
          if (!isMounted) return;
          // Reset text and index to restart animation
          setDisplayedText("");
          index = 0;
          setTimeout(typeText, 500); // Delay before restarting (500ms)
        }, 1000); // Pause duration after full text (1000ms)
      }
    };

    typeText();

    // Cleanup to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []);

  // Smooth scroll helper inside component
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64; // same offset as page.tsx
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-8 bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center flex flex-col items-center space-y-8"
      >
        <AnimatedProfileImage
          src="/profile-pic.jpg"
          alt="Prudhvi Akula"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mt-6 sm:mt-8 md:mt-12"
        />
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white typing-cursor max-w-full sm:max-w-4xl mx-auto"
        >
          {displayedText}
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl text-gray-200 leading-relaxed">
          Full-Stack Developer | Cloud Enthusiast | Crafting AI-Driven Web Solutions with Passion
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => smoothScrollTo("contact")}
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg text-lg font-semibold mirror-hover focus:ring-2 focus:ring-blue-500 md:px-8 md:py-3 md:text-lg"
          >
            Connect with Me
          </button>
          <a
            href="/prudhvi_resume.pdf"
            className="relative border-2 border-blue-500 text-blue-400 px-6 py-2 rounded-full hover:text-white transition-all duration-300 shadow-lg text-lg font-semibold mirror-hover mirror-border focus:ring-2 focus:ring-blue-500 md:px-8 md:py-3 md:text-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
