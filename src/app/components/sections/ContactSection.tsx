import { motion } from "framer-motion";
import { EmailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "../Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-lg text-gray-300"
          >
            <p>
              I’m always open to new opportunities, collaborations, or just a chat about tech! Reach out via:
            </p>
            <p className="flex items-center">
              <EmailIcon className="w-5 h-5 mr-2 text-blue-400" />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:prudhviakula92@gmail.com"
                className="text-blue-400 hover:text-blue-600 cursor-hover-trigger transition-colors duration-200 ml-1"
              >
                prudhviakula92@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919494662748"
                className="text-blue-400 hover:text-blue-600 cursor-hover-trigger transition-colors duration-200 ml-1"
              >
                +91 9494662748
              </a>
            </p>
            <p className="flex items-center">
              <LinkedinIcon className="w-5 h-5 mr-2 text-blue-400" />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/prudhvi1519/"
                className="text-blue-400 hover:text-blue-600 cursor-hover-trigger transition-colors duration-200 ml-1"
              >
                prudhvi1519
              </a>
            </p>
            <p className="flex items-center">
              <GithubIcon className="w-5 h-5 mr-2 text-blue-400" />
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/prudhvi1519"
                className="text-blue-400 hover:text-blue-600 cursor-hover-trigger transition-colors duration-200 ml-1"
              >
                prudhvi1519
              </a>
            </p>
          </motion.div>
        </div>
    </section>
  );
}