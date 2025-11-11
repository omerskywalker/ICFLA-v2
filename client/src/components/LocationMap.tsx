import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationMap() {
  const address = 'Islamic Center of Farmerville, Louisiana';
  const mapsUrl = 'https://www.google.com/maps/search/Islamic+Center+of+Farmerville+Louisiana';

  return (
    <section className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Locate Us</h2>
          <p className="text-muted-foreground text-lg">Visit us for prayers and community events</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.123!2d-92.406!3d32.771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzE1LjYiTiA5MsKwMjQnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Islamic Center of Farmerville Location"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
              <Button
                className="w-full"
                onClick={() => window.open(mapsUrl, '_blank')}
                data-testid="button-get-directions"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </Card>

            <Card className="p-6 hover-elevate">
              <h3 className="font-bold text-lg mb-4">Prayer Times</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fajr:</span>
                  <span className="font-semibold">5:26 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dhuhr:</span>
                  <span className="font-semibold">11:55 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jumu'ah:</span>
                  <span className="font-semibold">1:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Asr:</span>
                  <span className="font-semibold">2:49 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maghrib:</span>
                  <span className="font-semibold">5:11 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Isha:</span>
                  <span className="font-semibold">6:21 PM</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
