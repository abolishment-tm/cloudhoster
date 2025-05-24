import { create } from 'zustand';

interface AnalyticsState {
  pageViews: Array<{ date: string; views: number }>;
  userSessions: Array<{ date: string; sessions: number }>;
  bounceRate: Array<{ date: string; rate: number }>;
  loading: boolean;
  error: string | null;
  fetchAnalytics: () => Promise<void>;
}

// Mock data generator
const generateMockData = (days: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    data.push(date.toISOString().split('T')[0]);
  }
  
  return data;
};

const dates = generateMockData(30);

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  pageViews: dates.map(date => ({
    date,
    views: Math.floor(Math.random() * 1000) + 500
  })),
  userSessions: dates.map(date => ({
    date,
    sessions: Math.floor(Math.random() * 500) + 200
  })),
  bounceRate: dates.map(date => ({
    date,
    rate: Math.floor(Math.random() * 30) + 20
  })),
  loading: false,
  error: null,
  fetchAnalytics: async () => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would fetch data from GTM here
      // For now, we're using the mock data initialized above
      
      set({ loading: false });
    } catch (error) {
      set({ 
        error: 'Failed to fetch analytics data', 
        loading: false 
      });
    }
  }
}));