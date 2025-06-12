"use client";

import { useEffect, useRef } from "react";
import { motion, MotionProps } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

interface TiltDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

interface VanillaTiltElement extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

export default function TiltDiv({ children, className, ...motionProps }: TiltDivProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltNode && (tiltNode as VanillaTiltElement).vanillaTilt) {
        (tiltNode as VanillaTiltElement).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      className={`js-tilt ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
