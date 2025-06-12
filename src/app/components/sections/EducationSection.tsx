import { motion } from "framer-motion";
import { Education } from "../../types";

const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    period: "2021 - 2024",
    institution: "NSRIT, Visakhapatnam | CGPA: 7.49",
    details: "Focused on software engineering, algorithms, and cloud computing, with hands-on projects in web development.",
  },
  {
    degree: "Diploma in Computer Engineering",
    period: "2017 - 2020",
    institution: "Andhra Polytechnic, Kakinada | Percentage: 66%",
    details: "Built a strong foundation in programming, networking, and hardware, with practical training in system design.",
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-950/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p className="text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
