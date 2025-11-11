import Hero from '../Hero';
import pattern1 from '@assets/generated_images/Islamic_geometric_pattern_gold_teal_f662d4f2.png';
import pattern2 from '@assets/generated_images/Islamic_pattern_turquoise_gold_0d33383a.png';
import pattern3 from '@assets/generated_images/Islamic_geometric_gold_blue_daf2c09f.png';

export default function HeroExample() {
  return (
    <Hero
      images={[pattern1, pattern2, pattern3]}
      title="Islamic Center of Farmerville Louisiana"
      subtitle="Welcome to our community - Join us for prayer and fellowship"
    />
  );
}
