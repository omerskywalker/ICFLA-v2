import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBorder from './AnimatedBorder';

interface PhotoGalleryProps {
  images: string[];
  title?: string;
}

export default function PhotoGallery({ images, title = 'Inside Our Masjid' }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToNext = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const goToPrev = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  return (
    <>
    <AnimatedBorder delay={0.4}>
      <section className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">{title}</h2>
          <p className="text-lg md:text-xl font-serif">Explore our peaceful prayer space</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image}
                alt={`Mosque interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg font-heading">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedBorder>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={closeLightbox}
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 md:top-4 md:right-4 text-primary hover:bg-primary/20 border border-primary/30 z-10"
              onClick={closeLightbox}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/20 border border-primary/30 hidden sm:flex"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              data-testid="button-prev-image"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/20 border border-primary/30 hidden sm:flex"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              data-testid="button-next-image"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage]}
              alt={`Mosque interior ${selectedImage + 1}`}
              className="max-h-[85vh] md:max-h-[90vh] max-w-[95vw] md:max-w-[90vw] object-contain rounded-lg border-2 border-primary/30"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
