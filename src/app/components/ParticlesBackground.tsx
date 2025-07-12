"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  depth: number;
}

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 0.5,
        depth: Math.random(),
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const handleResize = () => generateParticles();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
    >
      <svg className="w-full h-full">
        {particles.map((particle) => (
          <motion.g
            key={particle.id}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              scale: 1 + particle.depth * 0.5,
              rotate: 360,
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <circle
              cx="0"
              cy="0"
              r={particle.size}
              fill={theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 255, 0.3)"}
              style={{
                filter: `blur(${particle.depth * 5}px)`,
                transform: `translateZ(${particle.depth * 100}px)`,
              }}
            >
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur={`${particle.speed * 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}
