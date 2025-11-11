import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sunrise, Sunset } from 'lucide-react';

export interface PrayerTime {
  name: string;
  time: string;
  icon?: 'sunrise' | 'sunset';
  isNext?: boolean;
}

interface PrayerTimesProps {
  prayers: PrayerTime[];
}

export default function PrayerTimes({ prayers }: PrayerTimesProps) {
  return (
    <section id="prayer-times" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Prayer Times</h2>
          <p className="text-lg md:text-xl font-serif">Daily prayer schedule for today</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto p-8 md:p-10 bg-gradient-to-br from-card via-card to-accent/30 border-primary/20 shadow-xl shadow-primary/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {prayers.map((prayer, index) => (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-5 rounded-lg transition-all duration-300 ${
                    prayer.isNext
                      ? 'bg-primary/15 border-2 border-primary/40 shadow-lg shadow-primary/10'
                      : 'bg-background/70 hover-elevate border border-border/50'
                  }`}
                  data-testid={`prayer-${prayer.name.toLowerCase()}`}
                >
                  <div className="flex items-center gap-4">
                    {prayer.icon === 'sunrise' && <Sunrise className="h-6 w-6 text-primary" />}
                    {prayer.icon === 'sunset' && <Sunset className="h-6 w-6 text-primary" />}
                    <span className={`font-semibold text-xl ${prayer.isNext ? 'text-primary' : 'text-foreground'}`}>
                      {prayer.name}
                    </span>
                  </div>
                  <span className={`font-mono text-xl ${prayer.isNext ? 'text-primary font-bold' : 'text-foreground/90'}`}>
                    {prayer.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
