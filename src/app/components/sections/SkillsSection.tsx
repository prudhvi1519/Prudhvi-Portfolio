import { motion } from "framer-motion";
import { Skill } from "../../types";

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Django", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Git"],
  },
  {
    category: "Tools & Others",
    items: ["GitHub", "VS Code", "Jira"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {skill.items.map((item) => (
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
