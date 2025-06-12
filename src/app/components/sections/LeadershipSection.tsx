import { motion } from "framer-motion";
import { Leadership } from "../../types";

const leadership: Leadership[] = [
  {
    title: "Team Lead, Chatbot Enhancement",
    organization: "NirveonX",
    period: "June 2025 - Present",
    details: ["Led a dynamic team at NirveonX to design and implement real-time audio and video communication features for the Pet-AI chatbot platform. By resolving latency issues and ensuring cross-browser compatibility, we improved user satisfaction by 35%, enhancing the platform’s reliability and engagement."],
  },
  {
    title: "Campus Ambassador",
    organization: "RINEX",
    period: "May 2024 - June 2024",
    details: ["As a Campus Ambassador for RINEX (Entrepreneurship Cell, IIT Bhubaneswar) in 2024, I organized online workshops and events that promoted entrepreneurship and innovation among students. My contributions were recognized for significantly enhancing student engagement and fostering a culture of innovation."],
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950/50 transition-all duration-300"
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
