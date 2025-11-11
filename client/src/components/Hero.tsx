import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  images: string[];
  title: string;
  subtitle: string;
}

export default function Hero({ images, title, subtitle }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 animate-rotate-slow opacity-30">
              <img
                src={images[currentIndex]}
                alt="Islamic geometric pattern"
                className="w-full h-full object-cover"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
            <div className="absolute inset-0 animate-rotate-reverse opacity-20">
              <img
                src={images[(currentIndex + 1) % images.length]}
                alt="Islamic geometric pattern"
                className="w-full h-full object-cover"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
          <div className="absolute inset-0 animate-pulse-glow bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-5xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 drop-shadow-2xl text-primary"
            style={{ textShadow: '0 0 40px rgba(217, 163, 64, 0.3)' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl lg:text-3xl mb-10 drop-shadow-xl font-serif text-foreground/95"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
              onClick={() => document.getElementById('prayer-times')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-prayer-times"
            >
              Prayer Times
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary/50 text-foreground hover:bg-background/20 font-semibold text-lg px-8"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-donate"
            >
              Donate
            </Button>
          </motion.div>
        </div>
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-primary hover:bg-primary/20 backdrop-blur-sm border border-primary/30"
        onClick={goToPrev}
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-primary hover:bg-primary/20 backdrop-blur-sm border border-primary/30"
        onClick={goToNext}
        data-testid="button-next-slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-primary w-10 h-3 shadow-lg shadow-primary/50' 
                : 'bg-primary/40 w-3 h-3 hover:bg-primary/60'
            }`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
