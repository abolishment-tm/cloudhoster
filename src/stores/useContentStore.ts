import { create } from 'zustand';

interface Content {
  id: string;
  type: string;
  key: string;
  value: string;
  language: string;
  lastUpdated: string;
}

interface ContentState {
  contents: Content[];
  loading: boolean;
  error: string | null;
  fetchContents: () => Promise<void>;
  updateContent: (id: string, value: string) => Promise<void>;
  createContent: (content: Omit<Content, 'id' | 'lastUpdated'>) => Promise<void>;
  deleteContent: (id: string) => Promise<void>;
}

// Mock data
const mockContents: Content[] = [
  {
    id: '1',
    type: 'hero',
    key: 'title',
    value: 'Get Worry-Free Web Hosting',
    language: 'en',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    type: 'hero',
    key: 'title',
    value: 'Dapatkan Web Hosting Tanpa Khawatir',
    language: 'id',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    type: 'legal',
    key: 'terms',
    value: `<h2>Terms and Conditions</h2>
<p>Welcome to CloudHoster. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.</p>
<h3>1. Service Agreement</h3>
<p>CloudHoster provides web hosting services subject to these terms...</p>`,
    language: 'en',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '4',
    type: 'legal',
    key: 'terms',
    value: `<h2>Syarat dan Ketentuan</h2>
<p>Selamat datang di CloudHoster. Dengan mengakses situs web ini, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut.</p>
<h3>1. Perjanjian Layanan</h3>
<p>CloudHoster menyediakan layanan web hosting dengan syarat-syarat berikut...</p>`,
    language: 'id',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '5',
    type: 'legal',
    key: 'privacy',
    value: `<h2>Privacy Policy</h2>
<p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
<h3>1. Information Collection</h3>
<p>We collect information that you provide directly to us...</p>`,
    language: 'en',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '6',
    type: 'legal',
    key: 'privacy',
    value: `<h2>Kebijakan Privasi</h2>
<p>Privasi Anda penting bagi kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>
<h3>1. Pengumpulan Informasi</h3>
<p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami...</p>`,
    language: 'id',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '7',
    type: 'legal',
    key: 'service',
    value: `<h2>Service Policy</h2>
<p>This Service Policy outlines the terms and conditions under which we provide our hosting services.</p>
<h3>1. Service Level Agreement</h3>
<p>We strive to maintain 99.9% uptime for all our hosting services...</p>`,
    language: 'en',
    lastUpdated: new Date().toISOString()
  },
  {
    id: '8',
    type: 'legal',
    key: 'service',
    value: `<h2>Kebijakan Layanan</h2>
<p>Kebijakan Layanan ini menguraikan syarat dan ketentuan di mana kami menyediakan layanan hosting kami.</p>
<h3>1. Perjanjian Tingkat Layanan</h3>
<p>Kami berusaha untuk mempertahankan uptime 99,9% untuk semua layanan hosting kami...</p>`,
    language: 'id',
    lastUpdated: new Date().toISOString()
  }
];

export const useContentStore = create<ContentState>((set, get) => ({
  contents: [],
  loading: false,
  error: null,

  fetchContents: async () => {
    set({ loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ contents: mockContents, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch contents', loading: false });
    }
  },

  updateContent: async (id: string, value: string) => {
    set({ loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const contents = get().contents.map(content =>
        content.id === id
          ? { ...content, value, lastUpdated: new Date().toISOString() }
          : content
      );
      
      set({ contents, loading: false });
    } catch (error) {
      set({ error: 'Failed to update content', loading: false });
    }
  },

  createContent: async (content) => {
    set({ loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newContent = {
        ...content,
        id: Math.random().toString(36).substr(2, 9),
        lastUpdated: new Date().toISOString()
      };
      
      set(state => ({
        contents: [...state.contents, newContent],
        loading: false
      }));
    } catch (error) {
      set({ error: 'Failed to create content', loading: false });
    }
  },

  deleteContent: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        contents: state.contents.filter(content => content.id !== id),
        loading: false
      }));
    } catch (error) {
      set({ error: 'Failed to delete content', loading: false });
    }
  }
}));