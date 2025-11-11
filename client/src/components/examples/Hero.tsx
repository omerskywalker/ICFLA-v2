import Hero from '../Hero';
import mosqueInterior1 from '@assets/generated_images/Mosque_prayer_hall_interior_9994f2df.png';
import mosqueInterior2 from '@assets/generated_images/Mosque_dome_ceiling_interior_7518ac87.png';
import mosqueInterior3 from '@assets/generated_images/Mosque_entrance_hall_5ae87aed.png';

export default function HeroExample() {
  return (
    <Hero
      images={[mosqueInterior1, mosqueInterior2, mosqueInterior3]}
      title="Islamic Center of Farmerville Louisiana"
      subtitle="Welcome to our community - Join us for prayer and fellowship"
    />
  );
}
