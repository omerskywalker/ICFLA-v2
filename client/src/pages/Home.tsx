import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PrayerTimes from '@/components/PrayerTimes';
import PhotoGallery from '@/components/PhotoGallery';
import DonationSection from '@/components/DonationSection';
import LocationMap from '@/components/LocationMap';
import ContactSection from '@/components/ContactSection';

// Islamic geometric patterns for hero section
import pattern1 from '@assets/generated_images/Islamic_geometric_pattern_gold_teal_f662d4f2.png';
import pattern2 from '@assets/generated_images/Islamic_pattern_turquoise_gold_0d33383a.png';
import pattern3 from '@assets/generated_images/Islamic_geometric_gold_blue_daf2c09f.png';

// Actual mosque interior photos
import mosqueInterior1 from '@assets/mosque_photos/icfla-img-1.png';
import mosqueInterior2 from '@assets/mosque_photos/icfla-img-2.png';
import mosqueInterior3 from '@assets/mosque_photos/icfla-img-3.png';

export default function Home() {
  const heroImages = [pattern1, pattern2, pattern3];
  
  // todo: remove mock functionality - Prayer times should be fetched from an API or updated regularly
  const prayers = [
    { name: 'Fajr', time: '5:26 AM' },
    { name: 'Sunrise', time: '6:36 AM', icon: 'sunrise' as const },
    { name: 'Dhuhr', time: '11:55 AM', isNext: true },
    { name: "Jumu'ah", time: '1:30 PM' },
    { name: 'Asr', time: '2:49 PM' },
    { name: 'Maghrib', time: '5:11 PM', icon: 'sunset' as const },
    { name: 'Isha', time: '6:21 PM' },
  ];

  const galleryImages = [mosqueInterior1, mosqueInterior2, mosqueInterior3];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        images={heroImages}
        title="Islamic Center of Farmerville Louisiana"
        subtitle="Welcome to our community - Join us for prayer and fellowship"
      />
      <PrayerTimes prayers={prayers} />
      <div id="gallery">
        <PhotoGallery images={galleryImages} />
      </div>
      <DonationSection />
      <LocationMap />
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="bg-card/50 py-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="opacity-70 font-serif text-sm">
            © {new Date().getFullYear()} Islamic Center of Farmerville Louisiana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
