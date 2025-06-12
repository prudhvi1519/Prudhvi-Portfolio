import { motion } from "framer-motion";
import TiltImage from "../TiltImage";
import { Project } from "../../types";
import { GithubIcon, LiveDemoIcon } from "../Icons";

const projects: Project[] = [
  {
    title: "Pins Studio",
    tech: "Django, JavaScript, MySQL, AWS, Tailwind CSS",
    description: "A Pinterest-inspired platform for users to create, share, and save pins with features like infinite scrolling and user authentication.",
    impact: [
      "Developed a responsive web application with seamless user experience.",
      "Integrated Unsplash API for dynamic image sourcing, reducing server load by 20%.",
      "Deployed on Render, achieving 99.9% uptime.",
    ],
    image: "/pins-studio.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/pins_studio",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
      },
      {
        href: "https://prudhvi-pins-studio.onrender.com",
        label: "Live Demo",
        icon: <LiveDemoIcon className="w-5 h-5 mr-1" />,
      },
    ],
  },
  {
    title: "Online Python Compiler",
    tech: "React, Node.js, AWS EC2, Tailwind CSS",
    description: "A web-based IDE for writing, compiling, and executing Python code in real-time with a user-friendly interface.",
    impact: [
      "Enabled real-time code execution with low latency using AWS EC2.",
      "Designed an intuitive UI, increasing user engagement by 30%.",
      "Implemented secure code execution environments.",
    ],
    image: "/python-compiler.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/python-compiler",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
      },
    ],
  },
  {
    title: "Weather Dashboard",
    tech: "React, TypeScript, Tailwind CSS, OpenWeather API",
    description: "A responsive dashboard displaying real-time weather data for multiple cities with dynamic visualizations.",
    impact: [
      "Integrated OpenWeather API for accurate, real-time data.",
      "Built a responsive design compatible with mobile and desktop.",
      "Optimized API calls to reduce latency by 15%.",
    ],
    image: "/weather-dashboard.png",
    links: [
      {
        href: "https://github.com/prudhvi1519/weather-dashboard",
        label: "GitHub",
        icon: <GithubIcon className="w-5 h-5 mr-1" />,
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
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-950 transition-all duration-300"
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
