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
    <section id="prayer-times" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prayer Times</h2>
          <p className="text-muted-foreground text-lg">Daily prayer schedule for today</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto p-6 md:p-8 bg-gradient-to-br from-card to-accent/20 border-card-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prayers.map((prayer, index) => (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    prayer.isNext
                      ? 'bg-primary/10 border-2 border-primary/30 animate-pulse'
                      : 'bg-background/50 hover-elevate'
                  }`}
                  data-testid={`prayer-${prayer.name.toLowerCase()}`}
                >
                  <div className="flex items-center gap-3">
                    {prayer.icon === 'sunrise' && <Sunrise className="h-5 w-5 text-primary" />}
                    {prayer.icon === 'sunset' && <Sunset className="h-5 w-5 text-primary" />}
                    <span className={`font-semibold text-lg ${prayer.isNext ? 'text-primary' : ''}`}>
                      {prayer.name}
                    </span>
                  </div>
                  <span className={`font-mono text-lg ${prayer.isNext ? 'text-primary font-bold' : 'text-foreground'}`}>
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
