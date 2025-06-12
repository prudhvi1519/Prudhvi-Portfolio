import { motion } from "framer-motion";
import { Leadership } from "../../types";

const leadership: Leadership[] = [
  {
    title: "Team Lead, Chatbot Enhancement",
    organization: "NirveonX",
    period: "Mar 2024 - Jun 2024",
    details: ["Led a team of 4 to improve chatbot response accuracy by 15%."],
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Leadership
        </motion.h2>
        <div className="space-y-8">
          {leadership.map((lead, index) => (
            <motion.div
              key={lead.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{lead.title}</h3>
              <p className="text-gray-400 mb-2">{lead.organization} | {lead.period}</p>
              <ul className="list-disc list-inside text-gray-300">
                {lead.details.map((item) => (
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
