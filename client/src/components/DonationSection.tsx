import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, CreditCard, Mail } from 'lucide-react';

export default function DonationSection() {
  return (
    <section id="donate" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become A Benefactor</h2>
          <p className="text-muted-foreground text-lg">Support our community and help maintain our masjid</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Donate with Zelle</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Quick and easy donation through Zelle. Send directly to our account.
              </p>
              <div className="bg-accent/30 rounded-lg p-6 mb-6 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">Send to:</p>
                  <p className="text-xl font-bold text-primary">ICFLA786@gmail.com</p>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => window.open('https://www.zellepay.com', '_blank')}
                data-testid="button-zelle-donate"
              >
                Open Zelle
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Donate with Card</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Secure donation using credit or debit card through Stripe.
              </p>
              <div className="bg-accent/30 rounded-lg p-6 mb-6 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-6 inline-block mb-4">
                    <CreditCard className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Accepts all major credit cards, Apple Pay, Google Pay, and more
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="default"
                className="w-full"
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
