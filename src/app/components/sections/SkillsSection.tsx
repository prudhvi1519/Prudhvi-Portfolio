import { motion } from "framer-motion";
import { Skill } from "../../types";
import TiltDiv from "../TiltDiv";

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Django", "Tailwind CSS"],
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
  {
    category: "Soft Skills",
    items: ["Leadership", "Problem-Solving", "Communication", "Adaptability", "Team Collaboration"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <TiltDiv
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-850/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{skill.category}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TiltDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
