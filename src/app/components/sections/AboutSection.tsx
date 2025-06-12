import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed space-y-4"
        >
          <p>
            I’m a Computer Science graduate from NSRIT, Visakhapatnam, with a fervor for building innovative, user-centric web applications. Specializing in full-stack development, I leverage technologies like React, Next.js, Django, and AWS to create scalable, AI-driven solutions that solve real-world problems.
          </p>
          <p>
            My journey includes impactful internships at NirveonX, where I developed the Pet-AI platform’s landing page, chatbot, and real-time communication features, and at BrainOvision, where I honed my cloud skills on AWS. Projects like Pins Studio, a Pinterest-inspired platform, and an online Python Compiler demonstrate my ability to deliver robust, responsive applications.
          </p>
          <p>
            With a strong foundation in Python, C++, MySQL, and modern frameworks, I thrive in agile environments, collaborating with teams to drive innovation. My certifications in cybersecurity, networking, and software development underscore my commitment to continuous learning and excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
