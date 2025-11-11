import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, CreditCard, Mail } from 'lucide-react';

export default function DonationSection() {
  return (
    <section id="donate" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Become A Benefactor</h2>
          <p className="text-foreground/80 text-lg md:text-xl font-serif">Support our community and help maintain our masjid</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col border-primary/20 bg-gradient-to-br from-card to-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
                  <Smartphone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Donate with Zelle</h3>
              </div>
              <p className="text-foreground/80 mb-8 font-serif text-base">
                Quick and easy donation through Zelle. Send directly to our account.
              </p>
              <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-8 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="text-sm text-foreground/70 mb-3 font-serif">Send to:</p>
                  <p className="text-xl md:text-2xl font-bold text-primary tracking-wide lowercase">icfla786@gmail.com</p>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full text-base font-semibold"
                onClick={() => window.open('https://www.zellepay.com', '_blank')}
                data-testid="button-zelle-donate"
              >
                Open Zelle
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col border-primary/20 bg-gradient-to-br from-card to-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
                  <CreditCard className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Donate with Card</h3>
              </div>
              <p className="text-foreground/80 mb-8 font-serif text-base">
                Secure donation using credit or debit card through Stripe.
              </p>
              <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-8 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary/20 border border-primary/30 rounded-full p-8 inline-block mb-4">
                    <CreditCard className="h-14 w-14 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/70 font-serif">
                    Accepts all major credit cards, Apple Pay, Google Pay, and more
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="default"
                className="w-full text-base font-semibold"
                onClick={() => console.log('Stripe payment initiated')}
                data-testid="button-card-donate"
              >
                Donate Now
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
