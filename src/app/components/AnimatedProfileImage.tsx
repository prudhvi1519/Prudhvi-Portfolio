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

    // Hover parallax
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        innerControls.set({ x: relX * 5, y: relY * 5 });
        outerControls.set({ x: relX * 10, y: relY * 10 });
        dottedControls.set({ x: relX * 15, y: relY * 15 });
    };

    const handleMouseLeave = () => {
        // Return to loop
        innerControls.start({ transition: { duration: 0.5, ease: 'linear' } });
        outerControls.start({ transition: { duration: 0.5, ease: 'linear', delay: delayStep } });
        dottedControls.start({ transition: { duration: 0.5, ease: 'linear', delay: delayStep * 2 } });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center overflow-visible ${className}`}
        >
            {/* Inner Image Circle (top) */}
            <motion.div
                className="absolute w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%] rounded-full overflow-hidden ring-4 ring-black/30 shadow-2xl z-20"
                animate={innerControls}
            >
                <Image src={src} alt={alt} width={320} height={320} className="w-full h-full object-cover" priority />
            </motion.div>

            {/* Outer Colored Circle (middle) */}
            <motion.div
                className="absolute w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%] rounded-full z-10"
                style={{ background: '#8FA0A8' }}
                animate={outerControls}
            />

            {/* Dotted Circle (bottom, no fill) */}
            <motion.div
                className="absolute inset-0 z-0 flex items-center justify-center"
                animate={dottedControls}
            >
                <div className="w-[70%] h-[70%] sm:w-[72%] sm:h-[72%] md:w-[75%] md:h-[75%]">
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
