import { motion } from "framer-motion";
import { Experience } from "../../types";

const experiences: Experience[] = [
  {
    title: "Full Stack Development Intern (Lead Intern)",
    company: "Fission Infotech Pvt. Ltd.",
    period: "Aug 2025 - Dec 2025",
    responsibilities: [
      "Led tasks breakdown, tracking, and provided PR review support to ensure sprint-style execution.",
      "Gained multi-codebase exposure (React/Next.js/Astro/Java/Go) contributing to sites like fission.it, neodrafts, and keens.org.",
      "Implemented modern UI and motion using Tailwind CSS and Framer Motion for responsive components.",
      "Demonstrated infrastructure awareness through Linux workflows, NGINX routing, DNS management, and SSL cutover checks.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1tFXTrJj2Pw8KcP1zAsU5X3QZtOUUwPPA/view?usp=drivesdk",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "NirveonX",
    period: "Apr 2025 - Jun 2025",
    responsibilities: [
      "Developed UI components using Next.js and React with a focus on feature modularization and clean routing patterns.",
      "Adopted TypeScript for safer API contracts and reduced runtime errors across the application.",
      "Consumed REST APIs with robust request/response handling, proper status codes, and loading states.",
      "Contributed to WebRTC audio/video basics and optimized performance through lazy-loading and bundle awareness.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1Ez8zZhUIqbrHDKXnUmpDkXBRJlEPZzpR/view?usp=sharing",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-gray-950/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-3">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Internship Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
