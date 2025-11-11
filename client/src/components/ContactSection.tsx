import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import AnimatedBorder from './AnimatedBorder';

export default function ContactSection() {
  const email = 'icfla786@gmail.com';

  return (
    <AnimatedBorder delay={0.8}>
      <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Card className="p-10 md:p-14 hover-elevate border-primary/20 bg-gradient-to-br from-card via-card to-accent/30 shadow-xl shadow-primary/5">
            <div className="inline-block p-6 bg-primary/20 rounded-full mb-8 border border-primary/30">
              <Mail className="h-14 w-14 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-lg md:text-xl mb-10 font-serif">
              Have questions or need more information? We'd love to hear from you.
            </p>
            <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-10">
              <p className="text-sm opacity-75 mb-3 font-serif">Email us at:</p>
              <a
                href={`mailto:${email}`}
                className="text-2xl md:text-3xl font-heading font-bold text-primary hover:underline tracking-wide"
                data-testid="link-email"
              >
                {email}
              </a>
            </div>
            <Button
              size="lg"
              className="text-base font-semibold px-8"
              onClick={() => window.location.href = `mailto:${email}`}
              data-testid="button-send-email"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send us an email
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
    </AnimatedBorder>
  );
}
