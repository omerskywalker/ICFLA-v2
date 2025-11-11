import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sunrise, Sunset, Clock } from 'lucide-react';
import AnimatedBorder from './AnimatedBorder';
import { useState, useEffect } from 'react';

export interface PrayerTime {
  name: string;
  time: string;
  icon?: 'sunrise' | 'sunset';
  isNext?: boolean;
}

interface PrayerTimesProps {
  prayers: PrayerTime[];
}

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const minuteStr = minutes.toString().padStart(2, '0');
  const secondStr = seconds.toString().padStart(2, '0');
  return `${hour12}:${minuteStr}:${secondStr} ${period}`;
}

export default function PrayerTimes({ prayers }: PrayerTimesProps) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedBorder delay={0.2}>
      <section id="prayer-times" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-3 text-primary">Prayer Times</h2>
            <p className="text-base md:text-xl font-serif">Daily prayer schedule for today</p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mt-4 md:mt-6"
              data-testid="current-time-display"
            >
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <span className="font-mono text-lg md:text-xl text-primary font-semibold">{currentTime}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-card via-card to-accent/30 border-primary/20 shadow-xl shadow-primary/5">
              <div className="flex flex-col gap-3">
                {prayers.map((prayer, index) => (
                  <motion.div
                    key={prayer.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center justify-between p-3.5 md:p-4 rounded-lg transition-all duration-300 ${
                      prayer.isNext
                        ? 'bg-primary/15 border-2 border-primary/40 shadow-lg shadow-primary/10'
                        : 'bg-background/70 hover-elevate border border-border/50'
                    }`}
                    data-testid={`prayer-${prayer.name.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3">
                      {prayer.icon === 'sunrise' && <Sunrise className="h-5 w-5 text-primary" />}
                      {prayer.icon === 'sunset' && <Sunset className="h-5 w-5 text-primary" />}
                      <span className={`font-semibold text-lg md:text-xl ${prayer.isNext ? 'text-primary' : 'text-foreground'}`}>
                        {prayer.name}
                      </span>
                    </div>
                    <span className={`font-mono text-lg md:text-xl ${prayer.isNext ? 'text-primary font-bold' : 'text-foreground/90'}`}>
                      {prayer.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </AnimatedBorder>
  );
}
