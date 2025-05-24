import { create } from 'zustand';
import { openStackService } from '../services/openstack';

interface Instance {
  id: string;
  name: string;
  status: string;
  ip: string;
  region: string;
  os: string;
  cpu: number;
  ram: number;
  disk: number;
}

interface InstanceState {
  instances: Instance[];
  loading: boolean;
  error: string | null;
  fetchInstances: () => Promise<void>;
  createInstance: (params: {
    name: string;
    flavorId: string;
    imageId: string;
    networkId: string;
  }) => Promise<void>;
  deleteInstance: (id: string) => Promise<void>;
  startInstance: (id: string) => Promise<void>;
  stopInstance: (id: string) => Promise<void>;
  rebootInstance: (id: string) => Promise<void>;
}

export const useInstanceStore = create<InstanceState>((set, get) => ({
  instances: [],
  loading: false,
  error: null,

  fetchInstances: async () => {
    set({ loading: true, error: null });
    try {
      const instances = await openStackService.listInstances();
      set({
        instances: instances.map(instance => ({
          id: instance.id,
          name: instance.name,
          status: instance.status.toLowerCase(),
          ip: instance.addresses?.['public']?.[0]?.addr || '',
          region: 'Jakarta', // This would come from OpenStack metadata
          os: 'Ubuntu 22.04', // This would come from image metadata
          cpu: 2, // This would come from flavor details
          ram: 4,
          disk: 80
        })),
        loading: false
      });
    } catch (error) {
      set({ error: 'Failed to fetch instances', loading: false });
    }
  },

  createInstance: async (params) => {
    set({ loading: true, error: null });
    try {
      await openStackService.createInstance(params);
      await get().fetchInstances();
    } catch (error) {
      set({ error: 'Failed to create instance', loading: false });
    }
  },

  deleteInstance: async (id) => {
    set({ loading: true, error: null });
    try {
      await openStackService.deleteInstance(id);
      await get().fetchInstances();
    } catch (error) {
      set({ error: 'Failed to delete instance', loading: false });
    }
  },

  startInstance: async (id) => {
    set({ loading: true, error: null });
    try {
      await openStackService.startInstance(id);
      await get().fetchInstances();
    } catch (error) {
      set({ error: 'Failed to start instance', loading: false });
    }
  },

  stopInstance: async (id) => {
    set({ loading: true, error: null });
    try {
      await openStackService.stopInstance(id);
      await get().fetchInstances();
    } catch (error) {
      set({ error: 'Failed to stop instance', loading: false });
    }
  },

  rebootInstance: async (id) => {
    set({ loading: true, error: null });
    try {
      await openStackService.rebootInstance(id);
      await get().fetchInstances();
    } catch (error) {
      set({ error: 'Failed to reboot instance', loading: false });
    }
  }
}));