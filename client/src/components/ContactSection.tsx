import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  const email = 'ICFLA786@gmail.com';

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Card className="p-8 md:p-12 hover-elevate">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions or need more information? We'd love to hear from you.
            </p>
            <div className="bg-accent/30 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Email us at:</p>
              <a
                href={`mailto:${email}`}
                className="text-2xl font-bold text-primary hover:underline"
                data-testid="link-email"
              >
                {email}
              </a>
            </div>
            <Button
              size="lg"
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
  );
}
