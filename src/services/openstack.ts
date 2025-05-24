import axios from 'axios';

// Mock data for development/demo purposes
const mockInstances = [
  {
    id: '1',
    name: 'web-server-1',
    status: 'running',
    ip: '10.0.0.1',
    region: 'Jakarta',
    os: 'Ubuntu 22.04 LTS',
    cpu: 2,
    ram: 4,
    disk: 80
  },
  {
    id: '2',
    name: 'db-server-1',
    status: 'stopped',
    ip: '10.0.0.2',
    region: 'Jakarta',
    os: 'Ubuntu 22.04 LTS',
    cpu: 4,
    ram: 8,
    disk: 160
  },
  {
    id: '3',
    name: 'cache-server-1',
    status: 'running',
    ip: '10.0.0.3',
    region: 'Jakarta',
    os: 'Ubuntu 22.04 LTS',
    cpu: 2,
    ram: 4,
    disk: 40
  }
];

class OpenStackService {
  private async simulateApiCall<T>(data: T, delay: number = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), delay);
    });
  }

  async listInstances() {
    return this.simulateApiCall(mockInstances);
  }

  async createInstance(params: {
    name: string;
    flavorId: string;
    imageId: string;
    networkId: string;
  }) {
    const newInstance = {
      id: Math.random().toString(36).substr(2, 9),
      name: params.name,
      status: 'running',
      ip: `10.0.0.${mockInstances.length + 1}`,
      region: 'Jakarta',
      os: 'Ubuntu 22.04 LTS',
      cpu: 2,
      ram: 4,
      disk: 80
    };
    mockInstances.push(newInstance);
    return this.simulateApiCall(newInstance);
  }

  async deleteInstance(instanceId: string) {
    const index = mockInstances.findIndex(instance => instance.id === instanceId);
    if (index !== -1) {
      mockInstances.splice(index, 1);
    }
    return this.simulateApiCall(undefined);
  }

  async startInstance(instanceId: string) {
    const instance = mockInstances.find(instance => instance.id === instanceId);
    if (instance) {
      instance.status = 'running';
    }
    return this.simulateApiCall(undefined);
  }

  async stopInstance(instanceId: string) {
    const instance = mockInstances.find(instance => instance.id === instanceId);
    if (instance) {
      instance.status = 'stopped';
    }
    return this.simulateApiCall(undefined);
  }

  async rebootInstance(instanceId: string) {
    const instance = mockInstances.find(instance => instance.id === instanceId);
    if (instance) {
      instance.status = 'rebooting';
      setTimeout(() => {
        instance.status = 'running';
      }, 2000);
    }
    return this.simulateApiCall(undefined);
  }
}

export const openStackService = new OpenStackService();