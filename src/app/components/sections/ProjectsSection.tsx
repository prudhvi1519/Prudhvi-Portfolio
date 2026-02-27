import { motion } from "framer-motion";
import TiltImage from "../TiltImage";
import { Project } from "../../types";
import { GithubIcon, LiveDemoIcon } from "../Icons";

const projects: Project[] = [
  {
    title: "Pins Studio",
    tech: "Django, React, TypeScript, Tailwind CSS, MySQL",
    description: "A Pinterest-inspired platform combining a Django backend with a modern React frontend.",
    impact: [
      "Django MTV architecture build with robust user authentication.",
      "Feed system with pagination and infinite scroll UX.",
      "Engagement features including likes and comments with strict ownership rules.",
      "React and TypeScript rebuild foundation integrated with Tailwind UI.",
    ],
    image: "/pins-studio.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/Pins-Studio",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
      },
      {
        href: "https://pins-studio.netlify.app",
        label: "Live Demo",
        icon: <LiveDemoIcon className="w-5 h-5 mr-1" />,
      },
    ],
  },
  {
    title: "PulseOps Lite",
    tech: "Next.js, Neon Postgres, GitHub Actions",
    description: "A multi-tenant CloudOps tracker for monitoring, alerts, and incident management.",
    impact: [
      "Implemented multi-tenant org scoping and RBAC across different user roles.",
      "Engineered secure API key lifecycle with 'show once' issuance and hashed storage.",
      "Developed a log ingestion API and an advanced log explorer with filtering and pagination.",
      "Designed a cost-effective scheduler using GitHub Actions cron for automation jobs.",
    ],
    image: "/pulseops-lite.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/pulseops-lite",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
      },
      {
        href: "https://pulseops-lite.vercel.app",
        label: "Live Demo",
        icon: <LiveDemoIcon className="w-5 h-5 mr-1" />,
      },
    ],
  },
  {
    title: "ClientPulse CRM",
    tech: "Next.js, NextAuth, Prisma, Neon Postgres",
    description: "A secure, modern CRM platform featuring role-based access and Kanban workflows.",
    impact: [
      "Integrated NextAuth for secure sessions and enforced server-side RBAC.",
      "Leveraged Prisma and Neon Postgres for schema-aligned data modeling and migrations.",
      "Built core CRM modules containing clients, projects, and tasks with full CRUD workflows.",
      "Developed an interactive Kanban workflow with drag-and-drop support and cron reminders.",
    ],
    image: "/clientpulse-crm.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/clientpulse-crm",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
      },
      {
        href: "https://clientpulse-crm.vercel.app",
        label: "Live Demo",
        icon: <LiveDemoIcon className="w-5 h-5 mr-1" />,
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-400 tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950/50 transition-all duration-300"
            >
              <TiltImage
                src={proj.image}
                alt={`${proj.title} screenshot`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-3"><strong>Tech Stack:</strong> {proj.tech}</p>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {proj.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="flex space-x-4">
                {proj.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-blue-400 hover:text-blue-600 font-semibold transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
