import { motion } from "framer-motion";
import { Certification } from "../../types";

const certifications: Certification[] = [
  {
    title: "Python (Basic) (HackerRank)",
    period: "Aug 2023",
    details: [
      "Demonstrated proficiency in scalar types, operators, control flow, strings, collections, modularity, and OOP.",
      "Completed challenges to validate Python programming skills."
    
    ],
    link: "https://www.hackerrank.com/certificates/2bc9fcc6f59d",
  },
  {
    title: "Cyber Security and Privacy (NPTEL)",
    period: "July - October 2023 (12 Weeks)",
    details: [
      "Mastered concepts in digital security, malware protection, password security, and threat mitigation.",
      "Completed a rigorous 12-week course, earning a verified certificate.",
      <>
        Roll Number:{" "}
        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded font-mono">
          NPTEL23CS127S550105816
        </code>
      </>,
    ],
    link: "https://drive.google.com/file/d/1ULcYg5IKKksbYXL1t3g1eBZOlpA79n_j/view?usp=sharing",
  },
  {
    title: "Developer and Technology Job Simulation (Accenture, Forage)",
    period: "April 2025",
    details: [
      "Completed practical tasks in SDLC, STLC, Waterfall, Agile, and algorithmic thinking.",
      "Earned proficiency in software development methodologies and career exploration in technology.",
      "Verification Codes: Enrolment 9GpjkNtZXCYaBmd6m, User iBcMJWgWmvxGARnJP",
    ],
    link: "https://drive.google.com/file/d/1t6FYQQf7dyY2AQDRfEICsYpxlQIDaznF/view?usp=sharing",
  },
  {
    title: "IT Essentials: PC Hardware and Software (Cisco Networking Academy)",
    period: "2023",
    details: [
      "Proficient in building, repairing, and upgrading PCs, including component selection and installation.",
      "Skilled in Windows OS management, network security, and troubleshooting hardware/software issues.",
      "Configured devices for internet and cloud connectivity, and managed laptops, mobile devices, and printers.",
    ],
    link: "https://drive.google.com/file/d/1g6A06e_6AOBTB_crXY4CauaEls8ir6NB/view?usp=sharing",
  },
  {
    title: "CCNA R&S: Introduction to Networks (Cisco Networking Academy)",
    period: "2023",
    details: [
      "Gained expertise in network technologies, router hardware, and IP addressing for small to medium-sized networks.",
      "Configured initial network device settings and implemented basic connectivity.",
      "Utilized monitoring tools to ensure network performance and reliability.",
    ],
    link: "https://drive.google.com/file/d/1vwOx6ljAfAiu-o4QNiscS2oXkdewKLq6/view?usp=sharing",
  },
  {
    title: "CCNA R&S: Routing and Switching Essentials (Cisco Networking Academy)",
    period: "2023",
    details: [
      "Mastered routing table operations, VLAN implementation, and static routing with RIPv2.",
      "Configured DHCP, NAT, and ACLs to manage and secure network traffic.",
      "Troubleshot data networks using advanced monitoring tools.",
    ],
    link: "https://drive.google.com/file/d/1xRAPj-1DpDGUG4i4Px2nWyFlHRId25E3/view?usp=sharing",
  },
  
  {
    title: "Campus Ambassador (RINEX, IIT Bhubaneswar)",
    period: "May - June 2024",
    details: [
      "Recognized for outstanding contributions as a Campus Ambassador, promoting entrepreneurship initiatives.",
      "Organized events and workshops, fostering innovation among peers at NSRIT.",
    ],
    link: "https://drive.google.com/file/d/1ZpiKUtAoq05d9CZ3sEB4CllRpKkXB8bx/view?usp=sharing",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-950/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-3">{cert.period}</p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {cert.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a
                href={cert.link}
                className="text-blue-400 hover:text-blue-600 font-semibold transition-colors duration-200"
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
