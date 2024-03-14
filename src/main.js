console.log('hello from console')
import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';
import moment from 'moment-timezone';

const coordinates = new Coordinates(32.77167211151958, -92.40109711044289);
const params = CalculationMethod.MoonsightingCommittee();
const date = new Date();

const prayerTimes = new PrayerTimes(coordinates, date, params);


let localFajr, localDhuhr, localAsr, localMaghrib, localIsha, localJummah, localSunrise, localSunset;

localFajr = moment(prayerTimes.fajr).tz('America/Chicago').format('h:mm A');
localDhuhr = moment(prayerTimes.dhuhr).tz('America/Chicago').format('h:mm A');
localAsr = moment(prayerTimes.asr).tz('America/Chicago').format('h:mm A');
localMaghrib = moment(prayerTimes.maghrib).tz('America/Chicago').format('h:mm A');
localIsha = moment(prayerTimes.isha).tz('America/Chicago').format('h:mm A');
localJummah = "1:30 PM";
localSunrise = moment(prayerTimes.sunrise).tz('America/Chicago').format('h:mm A');
localSunset = moment(prayerTimes.sunset).tz('America/Chicago').format('h:mm A');

console.log(`Sunrise time is: ${localSunrise}`)
console.log(`Fajr time is: ${localFajr}`)
console.log(`Dhuhr time is: ${localDhuhr}`)
console.log(`Asr time is: ${localAsr}`)
console.log(`Maghrib time is: ${localMaghrib}`)
console.log(`Isha time is: ${localIsha}`)
console.log(`Sunset time is: ${localSunset}`)

document.querySelector("#fajrTime").innerHTML = localFajr;
document.querySelector("#dhuhrTime").innerHTML = localDhuhr;
document.querySelector("#asrTime").innerHTML = localAsr;
document.querySelector("#maghribTime").innerHTML = localMaghrib;
document.querySelector("#ishaTime").innerHTML = localIsha;
document.querySelector("#jummahTime").innerHTML = localJummah;
document.querySelector("#sunriseTime").innerHTML = localSunrise;


const btcQR = document.querySelector('.donate-btc');
const btcAddress = document.querySelector('.donate-btc-address');

btcQR.addEventListener('mouseover', function() {
    btcAddress.style.opacity = "1";
})

btcQR.addEventListener('mouseout', function() {
    btcAddress.style.opacity = '0';
  });


console.log(prayerTimes)

console.log(prayerTimes.maghrib)