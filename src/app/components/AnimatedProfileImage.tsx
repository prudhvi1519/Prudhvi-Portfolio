import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface AnimatedProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function AnimatedProfileImage({ src, alt, className }: AnimatedProfileImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Controls for each circle
    const innerControls = useAnimation();
    const outerControls = useAnimation();
    const dottedControls = useAnimation();

    // Circular path parameters
    const radius = 30;
    const loopDuration = 5;
    const delayStep = loopDuration / 3;

    // Generate circular path points
    const numPoints = 60;
    const angleStep = (2 * Math.PI) / numPoints;
    const circlePoints = Array.from({ length: numPoints + 1 }, (_, i) => ({
        x: Math.cos(angleStep * i) * radius,
        y: Math.sin(angleStep * i) * radius,
    }));

    useEffect(() => {
        // Initial stack
        innerControls.set({ x: 0, y: 0 });
        outerControls.set({ x: 0, y: 0 });
        dottedControls.set({ x: 0, y: 0 });

        // Start animations with staggered delays
        innerControls.start({
            x: circlePoints.map(p => p.x),
            y: circlePoints.map(p => p.y),
            transition: { duration: loopDuration, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
        });
        outerControls.start({
            x: circlePoints.map(p => p.x),
            y: circlePoints.map(p => p.y),
            transition: { duration: loopDuration, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: delayStep },
        });
        dottedControls.start({
            x: circlePoints.map(p => p.x),
            y: circlePoints.map(p => p.y),
            transition: { duration: loopDuration, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: delayStep * 2 },
        });
    }, [innerControls, outerControls, dottedControls]);

    return (
        <div
            ref={containerRef}
            className={`relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center overflow-visible ${className}`}
        >
            {/* Inner Image Circle (top) */}
            <motion.div
                className="absolute w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%] lg:w-[80%] lg:h-[80%] rounded-full overflow-hidden ring-4 ring-black/30 shadow-[0px_30px_60px_rgba(0,0,0,0.3)] z-20"
                animate={innerControls}
            >
                <Image src={src} alt={alt} width={320} height={320} className="w-full h-full object-cover" priority />
            </motion.div>

            {/* Outer Colored Circle (middle) */}
            <motion.div
                className="absolute w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%] lg:w-[80%] lg:h-[80%] rounded-full z-10 shadow-[0px_30px_60px_rgba(0,0,0,0.3)] bg-[#8FA0A8]"
                animate={outerControls}
            />

            {/* Dotted Circle (bottom, no fill) */}
            <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                animate={dottedControls}
            >
                <div className="w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%] lg:w-[80%] lg:h-[80%]">
                    <svg viewBox="0 0 320 320" className="w-full h-full">
                        <circle
                            cx="160"
                            cy="160"
                            r="159"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth={1}
                            strokeDasharray="10 10"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}
