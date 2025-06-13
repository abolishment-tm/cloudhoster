// File: src/components/DataCenter/getNearestDataCenter.ts
interface DataCenter {
  name: string;
  countryCode: string;
  lat: number;
  lon: number;
}

const dataCenters: DataCenter[] = [
  { name: 'Jakarta', countryCode: 'ID', lat: -6.2, lon: 106.8 },
  { name: 'Singapore', countryCode: 'SG', lat: 1.35, lon: 103.82 },
  { name: 'Hong Kong', countryCode: 'HK', lat: 22.3, lon: 114.2 },
  { name: 'London', countryCode: 'GB', lat: 51.5, lon: -0.1 },
  { name: 'Frankfurt', countryCode: 'DE', lat: 50.1, lon: 8.7 },
  { name: 'Silicon Valley', countryCode: 'US', lat: 37.4, lon: -122.1 },
  { name: 'Dallas', countryCode: 'US', lat: 32.8, lon: -96.8 },
  { name: 'New York', countryCode: 'US', lat: 40.7, lon: -74.0 },
  { name: 'Chicago', countryCode: 'US', lat: 41.9, lon: -87.6 },
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (val: number) => (val * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function getNearestDataCenter(): Promise<DataCenter | null> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const userLat = parseFloat(data.latitude);
    const userLon = parseFloat(data.longitude);

    let closest = dataCenters[0];
    let minDist = Infinity;

    for (const dc of dataCenters) {
      const dist = getDistance(userLat, userLon, dc.lat, dc.lon);
      if (dist < minDist) {
        minDist = dist;
        closest = dc;
      }
    }

    return closest;
  } catch (err) {
    console.error('Gagal mendapatkan lokasi pengguna:', err);
    return null;
  }
}
