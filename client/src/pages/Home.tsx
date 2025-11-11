import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PrayerTimes from '@/components/PrayerTimes';
import PhotoGallery from '@/components/PhotoGallery';
import DonationSection from '@/components/DonationSection';
import LocationMap from '@/components/LocationMap';
import ContactSection from '@/components/ContactSection';

// todo: remove mock functionality - Replace with actual mosque photos from icflouisiana.org
import mosqueInterior1 from '@assets/generated_images/Mosque_prayer_hall_interior_9994f2df.png';
import mosqueInterior2 from '@assets/generated_images/Mosque_dome_ceiling_interior_7518ac87.png';
import mosqueInterior3 from '@assets/generated_images/Mosque_entrance_hall_5ae87aed.png';

export default function Home() {
  // todo: remove mock functionality - Replace with actual mosque photos
  const heroImages = [mosqueInterior1, mosqueInterior2, mosqueInterior3];
  
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

  // todo: remove mock functionality - Replace with actual mosque photos
  const galleryImages = [mosqueInterior1, mosqueInterior2, mosqueInterior3];

  return (
    <div className="min-h-screen">
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
      <footer className="bg-card py-8 border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Islamic Center of Farmerville Louisiana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
