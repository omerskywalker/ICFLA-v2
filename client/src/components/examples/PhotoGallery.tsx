import PhotoGallery from '../PhotoGallery';
import mosqueInterior1 from '@assets/generated_images/Mosque_prayer_hall_interior_9994f2df.png';
import mosqueInterior2 from '@assets/generated_images/Mosque_dome_ceiling_interior_7518ac87.png';
import mosqueInterior3 from '@assets/generated_images/Mosque_entrance_hall_5ae87aed.png';

export default function PhotoGalleryExample() {
  return <PhotoGallery images={[mosqueInterior1, mosqueInterior2, mosqueInterior3]} />;
}
