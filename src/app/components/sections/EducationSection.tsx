import { motion } from "framer-motion";
import { Education } from "../../types";

const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    period: "2019 - 2023",
    institution: "NSRIT, Visakhapatnam",
    details: "Graduated with a CGPA of 8.5, focusing on software development and cloud computing.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400 mb-2">{edu.institution} | {edu.period}</p>
              <p className="text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
