"use client";

import { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltDivProps {
  children: ReactNode;
  className?: string;
}

interface VanillaTiltElement extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

export default function TiltDiv({ children, className }: TiltDivProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 15, // Maximum tilt angle
        speed: 400, // Speed of the tilt effect
        glare: true, // Enable glare effect
        "max-glare": 0.5, // Maximum glare opacity
      });
    }

    return () => {
      if (tiltNode && (tiltNode as VanillaTiltElement).vanillaTilt) {
        (tiltNode as VanillaTiltElement).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`js-tilt ${className}`}
    >
      {children}
    </div>
  );
}
