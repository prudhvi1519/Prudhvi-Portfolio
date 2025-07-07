import { motion } from "framer-motion";
import { Experience } from "../../types";

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "NirveonX",
    period: "Apr 2025 - June 2025",
    responsibilities: [
      <>
        Spearheaded the development of the{" "}
        <a
          href="https://nirveonx.com/pet-ai"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pet-AI landing page
        </a>{" "}
        and{" "}
        <a
          href="https://nirveonx.com/pet-ai/chat"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          chatbot interface
        </a>{" "}
        using React, Next.js, and Tailwind CSS, achieving a 30% increase in user engagement.
      </>,
      "Designed and implemented real-time audio and video call interfaces for Pet-AI, ensuring seamless cross-device compatibility and reducing latency by 25%.",
      "Led a team to optimize chatbot performance, resolving compatibility issues and boosting user satisfaction by 35% across browsers.",
      "Collaborated with UI/UX designers via Figma to create intuitive interfaces, enhancing user retention and interaction metrics.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1Ez8zZhUIqbrHDKXnUmpDkXBRJlEPZzpR/view?usp=sharing",
  },
  {
    title: "AWS Intern",
    company: "BrainOvision Solutions Pvt. Ltd.",
    period: "Jul 2022 - Aug 2022",
    responsibilities: [
      "Configured and deployed AWS S3 buckets and EC2 instances for high-availability applications, ensuring 30% uptime.",
      "Optimized API performance by integrating CloudWatch monitoring, reducing response times by 15%.",
      "Collaborated with backend teams to enhance cloud infrastructure reliability, supporting scalable deployments.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1oAyPMxYpJSnSvxHq25s_-uXtJ8zYUhCq/view?usp=sharing",
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
