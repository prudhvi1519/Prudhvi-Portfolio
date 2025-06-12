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
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 cursor-hover-trigger transition-transform duration-300 hover:scale-105 shadow-lg text-lg font-semibold"
          >
            Connect with Me
          </a>
          <a
            href="/prudhvi_resume.pdf"
            className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white cursor-hover-trigger transition-all duration-300 shadow-lg text-lg font-semibold"
            download
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
