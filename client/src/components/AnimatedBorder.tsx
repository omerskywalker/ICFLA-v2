import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedBorder({ children, delay = 0 }: AnimatedBorderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {children}
      
      {isInView && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
        >
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="white"
            strokeWidth="2"
            rx="16"
            ry="16"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              pathLength: { 
                duration: 2.5, 
                ease: "linear",
                delay: delay
              },
              opacity: { 
                duration: 0.3,
                delay: delay
              }
            }}
            style={{
              vectorEffect: 'non-scaling-stroke',
            }}
          />
        </svg>
      )}
    </div>
  );
}
