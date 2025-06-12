import { motion } from "framer-motion";
import { Experience } from "../../types";

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "NirveonX",
    period: "June 2025 - Present",
    responsibilities: [
      "Developed Pet-AI platform’s landing page and chatbot using React and Django.",
      "Implemented real-time communication with WebSocket, improving user engagement by 25%.",
      "Led a team to enhance chatbot features, reducing response time by 15%.",
    ],
  },
  {
    title: "AWS Intern",
    company: "BrainOvision Solutions",
    period: "Jul 2023 - Dec 2023",
    responsibilities: [
      "Deployed applications on AWS EC2 and S3, optimizing infrastructure costs by 10%.",
      "Automated CI/CD pipelines using GitHub Actions, reducing deployment time by 20%.",
      "Collaborated on cloud-based projects, ensuring 99.8% uptime.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
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
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
