"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface VanillaTiltElement extends HTMLImageElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

export default function TiltImage({ src, alt, className }: TiltImageProps) {
  const tiltRef = useRef<HTMLImageElement>(null);

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
      if (tiltNode) {
        (tiltNode as VanillaTiltElement).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <Image
      ref={tiltRef}
      src={src}
      alt={alt}
      width={500}
      height={500}
      className={`js-tilt ${className}`}
      priority={src.includes("profile-pic")}
    />
  );
}
