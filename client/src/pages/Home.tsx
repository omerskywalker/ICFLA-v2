import { useQuery } from '@tanstack/react-query';
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

interface PrayerTimesResponse {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
  date: string;
  timezone: string;
}

function convertTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${period}`;
}

function getCurrentPrayer(timings: PrayerTimesResponse['timings']): string {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;
  
  // Find the last prayer that has already passed
  let currentPrayer = 'Isha'; // Default to Isha (end of day)
  
  for (let i = prayerOrder.length - 1; i >= 0; i--) {
    const prayer = prayerOrder[i];
    const [hours, minutes] = timings[prayer].split(':');
    const prayerMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    
    // If this prayer time has passed, it's the current one
    if (prayerMinutes <= currentMinutes) {
      currentPrayer = prayer;
      break;
    }
  }
  
  return currentPrayer;
}

export default function Home() {
  const heroImages = [pattern1, pattern2, pattern3];
  
  const { data: prayerData, isLoading, isError } = useQuery<PrayerTimesResponse>({
    queryKey: ['/api/prayer-times'],
    refetchInterval: 60000, // Refetch every minute to update "next prayer" indicator
    staleTime: 300000, // Consider data stale after 5 minutes
    retry: 3, // Retry failed requests 3 times
  });

  // Compute current prayer once per render to avoid inconsistent highlighting
  const currentPrayer = prayerData ? getCurrentPrayer(prayerData.timings) : null;

  const prayers = prayerData ? [
    { name: 'Fajr', time: convertTo12Hour(prayerData.timings.Fajr), isNext: currentPrayer === 'Fajr' },
    { name: 'Sunrise', time: convertTo12Hour(prayerData.timings.Sunrise), icon: 'sunrise' as const, isNext: currentPrayer === 'Sunrise' },
    { name: 'Dhuhr', time: convertTo12Hour(prayerData.timings.Dhuhr), isNext: currentPrayer === 'Dhuhr' },
    { name: "Jumu'ah", time: '1:30 PM' },
    { name: 'Asr', time: convertTo12Hour(prayerData.timings.Asr), isNext: currentPrayer === 'Asr' },
    { name: 'Maghrib', time: convertTo12Hour(prayerData.timings.Maghrib), icon: 'sunset' as const, isNext: currentPrayer === 'Maghrib' },
    { name: 'Isha', time: convertTo12Hour(prayerData.timings.Isha), isNext: currentPrayer === 'Isha' },
  ] : [];

  const galleryImages = [mosqueInterior1, mosqueInterior2, mosqueInterior3];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        images={heroImages}
        title="Islamic Center of Farmerville Louisiana"
        subtitle="Welcome to our community"
        subtitle2="Join us for prayer and fellowship"
      />
      {!isLoading && !isError && prayers.length > 0 && <PrayerTimes prayers={prayers} />}
      {isLoading && (
        <section id="prayer-times" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto" aria-label="Loading prayer times"/>
            <p className="mt-4 opacity-70">Loading prayer times...</p>
          </div>
        </section>
      )}
      {isError && (
        <section id="prayer-times" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Prayer Times</h2>
            <p className="text-lg opacity-70">Unable to load prayer times. Please check back later.</p>
          </div>
        </section>
      )}
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
