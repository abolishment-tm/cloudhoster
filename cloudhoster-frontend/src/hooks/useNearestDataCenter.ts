// File: src/hooks/useNearestDataCenter.ts
import { useEffect, useState } from 'react';
import { getNearestDataCenter } from '../components/DataCenter/getNearestDataCenter';

interface DataCenter {
  name: string;
  countryCode: string;
}

export function useNearestDataCenter() {
  const [dataCenter, setDataCenter] = useState<DataCenter | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const nearest = await getNearestDataCenter();
      if (nearest) setDataCenter(nearest);
    };
    fetchLocation();
  }, []);

  return dataCenter;
}
