import PrayerTimes from '../PrayerTimes';

export default function PrayerTimesExample() {
  const prayers = [
    { name: 'Fajr', time: '5:26 AM' },
    { name: 'Sunrise', time: '6:36 AM', icon: 'sunrise' as const },
    { name: 'Dhuhr', time: '11:55 AM', isNext: true },
    { name: "Jumu'ah", time: '1:30 PM' },
    { name: 'Asr', time: '2:49 PM' },
    { name: 'Maghrib', time: '5:11 PM', icon: 'sunset' as const },
    { name: 'Isha', time: '6:21 PM' },
  ];

  return <PrayerTimes prayers={prayers} />;
}
