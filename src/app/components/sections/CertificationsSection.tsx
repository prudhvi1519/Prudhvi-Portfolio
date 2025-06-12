import { motion } from "framer-motion";
import { Certification } from "../../types";

const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    period: "Aug 2023",
    details: ["Validated foundational knowledge of AWS cloud services and architecture."],
    link: "https://www.credly.com/badges/aws-cloud-practitioner",
  },
  {
    title: "Cybersecurity Essentials (Cisco Networking Academy)",
    period: "May 2023",
    details: ["Learned core cybersecurity principles and threat mitigation techniques."],
    link: "https://www.credly.com/badges/cybersecurity-essentials",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Certifications
        </motion.h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-2">{cert.period}</p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {cert.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={cert.link}
                className="text-blue-400 hover:text-blue-600 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
