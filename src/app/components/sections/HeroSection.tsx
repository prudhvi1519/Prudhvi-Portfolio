import { motion } from "framer-motion";
import TiltImage from "../TiltImage";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900">
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
          <a
            href="#contact"
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full overflow-hidden cursor-hover-trigger transition-transform duration-300 hover:scale-105 shadow-lg text-lg font-semibold mirror-hover"
          >
            Connect with Me
          </a>
          <a
            href="/prudhvi_resume.pdf"
            className="relative border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full overflow-hidden hover:text-white cursor-hover-trigger transition-all duration-300 shadow-lg text-lg font-semibold mirror-hover"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Custom CSS for mirror-like hover effect */}
      <style jsx>{`
        .mirror-hover {
          position: relative;
          z-index: 1;
        }

        .mirror-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
          z-index: -1;
        }

        .mirror-hover:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
}
