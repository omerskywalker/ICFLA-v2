import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, CreditCard, Mail, Bitcoin } from 'lucide-react';
import bitcoinQR from '@assets/bitcoin-qr.png';
import AnimatedBorder from './AnimatedBorder';

export default function DonationSection() {
  const stripeUrl = 'https://donate.stripe.com/fZecPXch8c4T8Pm3cc';

  return (
    <AnimatedBorder delay={0.6}>
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
          <p className="text-lg md:text-xl font-serif">Support our community and help maintain our masjid</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <p className="mb-8 font-serif text-base">
                Quick and easy donation through Zelle. Send directly to our account.
              </p>
              <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-8 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="text-sm opacity-75 mb-3 font-serif">Send to:</p>
                  <p className="text-xl md:text-2xl font-heading font-bold text-primary tracking-wide lowercase">icfla786@gmail.com</p>
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
              <p className="mb-8 font-serif text-base">
                Secure donation using credit or debit card through Stripe.
              </p>
              <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-8 flex-grow flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary/20 border border-primary/30 rounded-full p-8 inline-block mb-4">
                    <CreditCard className="h-14 w-14 text-primary" />
                  </div>
                  <p className="text-sm opacity-75 font-serif">
                    Accepts all major credit cards, Apple Pay, Google Pay, and more
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                variant="default"
                className="w-full text-base font-semibold"
                onClick={() => window.open(stripeUrl, '_blank')}
                data-testid="button-card-donate"
              >
                Donate Now
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="p-8 md:p-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col border-primary/20 bg-gradient-to-br from-card to-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
                  <Bitcoin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Donate Bitcoin</h3>
              </div>
              <p className="mb-8 font-serif text-base">
                Support us with cryptocurrency. Scan the QR code or copy the address.
              </p>
              <div className="bg-accent/40 border border-primary/20 rounded-lg p-8 mb-8 flex-grow flex flex-col items-center justify-center">
                <img 
                  src={bitcoinQR} 
                  alt="Bitcoin donation QR code" 
                  className="w-48 h-48 mb-6 rounded-lg border-2 border-primary/30"
                />
                <p className="text-xs opacity-75 mb-2 font-serif">Bitcoin Address:</p>
                <p className="text-sm font-mono text-primary font-bold break-all text-center px-2">
                  bc1q0tufna2uap22wnu3l62y9csfcjx2wlcqqlfpaj
                </p>
              </div>
              <Button
                size="lg"
                variant="default"
                className="w-full text-base font-semibold"
                onClick={() => {
                  navigator.clipboard.writeText('bc1q0tufna2uap22wnu3l62y9csfcjx2wlcqqlfpaj');
                  alert('Bitcoin address copied to clipboard!');
                }}
                data-testid="button-bitcoin-copy"
              >
                Copy Address
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
    </AnimatedBorder>
  );
}
