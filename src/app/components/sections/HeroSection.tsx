import { motion } from "framer-motion";
import TiltImage from "../TiltImage";

export default function HeroSection() {
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
      id="hero" // add id for scroll target
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center flex flex-col items-center space-y-8"
      >
        <TiltImage
          src="/profile-pic.jpg"
          alt="Prudhvi Akula"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Prudhvi Akula
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl text-gray-200 leading-relaxed">
          Full-Stack Developer | Cloud Enthusiast | Crafting AI-Driven Web Solutions with Passion
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => smoothScrollTo("contact")}
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg text-lg font-semibold mirror-hover focus:ring-2 focus:ring-blue-500
              md:px-8 md:py-3 md:text-lg"
          >
            Connect with Me
          </button>
          <a
            href="/prudhvi_resume.pdf"
            className="relative border-2 border-blue-500 text-blue-400 px-6 py-2 rounded-full hover:text-white cursor-pointer transition-all duration-300 shadow-lg text-lg font-semibold mirror-hover mirror-border focus:ring-2 focus:ring-blue-500
              md:px-8 md:py-3 md:text-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
