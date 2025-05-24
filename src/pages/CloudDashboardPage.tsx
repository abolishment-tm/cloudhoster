import React, { useState, useEffect } from 'react';
import { 
  Server, 
  HardDrive, 
  Cpu, 
  Network, 
  Power,
  Plus,
  RefreshCw,
  Trash2,
  Settings,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { useInstanceStore } from '../stores/useInstanceStore';
import './CloudDashboardPage.css';

const CloudDashboardPage: React.FC = () => {
  const { 
    instances, 
    loading, 
    error,
    fetchInstances,
    startInstance,
    stopInstance,
    rebootInstance,
    deleteInstance
  } = useInstanceStore();
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState<string | null>(null);

  useEffect(() => {
    fetchInstances();
  }, [fetchInstances]);

  const handleCreateInstance = () => {
    setShowCreateModal(true);
  };

  const handleInstanceAction = async (action: string, instanceId: string) => {
    try {
      switch (action) {
        case 'start':
          await startInstance(instanceId);
          break;
        case 'stop':
          await stopInstance(instanceId);
          break;
        case 'restart':
          await rebootInstance(instanceId);
          break;
        case 'delete':
          if (window.confirm('Are you sure you want to delete this instance?')) {
            await deleteInstance(instanceId);
          }
          break;
      }
    } catch (error) {
      console.error(`Failed to ${action} instance:`, error);
    }
  };

  return (
    <div className="cloud-dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h1>Cloud Dashboard</h1>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <Server size={20} />
            <span>Instances</span>
          </a>
          <a href="#" className="nav-item">
            <HardDrive size={20} />
            <span>Volumes</span>
          </a>
          <a href="#" className="nav-item">
            <Network size={20} />
            <span>Networks</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-button">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-title">
            <h2>Cloud Instances</h2>
            <p>Manage your cloud servers</p>
          </div>
          <button className="create-button" onClick={handleCreateInstance}>
            <Plus size={20} />
            <span>Create Instance</span>
          </button>
        </header>

        {error && (
          <div className="error-message">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <div className="instances-grid">
          {loading ? (
            <div className="loading">Loading instances...</div>
          ) : (
            instances.map(instance => (
              <div key={instance.id} className={`instance-card ${instance.status}`}>
                <div className="instance-header">
                  <h3>{instance.name}</h3>
                  <span className={`status-badge ${instance.status}`}>
                    {instance.status}
                  </span>
                </div>
                
                <div className="instance-details">
                  <div className="detail-item">
                    <span className="label">IP Address</span>
                    <span className="value">{instance.ip}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Region</span>
                    <span className="value">{instance.region}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">OS</span>
                    <span className="value">{instance.os}</span>
                  </div>
                </div>

                <div className="instance-specs">
                  <div className="spec-item">
                    <Cpu size={16} />
                    <span>{instance.cpu} vCPUs</span>
                  </div>
                  <div className="spec-item">
                    <HardDrive size={16} />
                    <span>{instance.ram} GB RAM</span>
                  </div>
                  <div className="spec-item">
                    <Server size={16} />
                    <span>{instance.disk} GB SSD</span>
                  </div>
                </div>

                <div className="instance-actions">
                  <button 
                    className="action-button"
                    onClick={() => handleInstanceAction(
                      instance.status === 'running' ? 'stop' : 'start',
                      instance.id
                    )}
                  >
                    <Power size={16} />
                  </button>
                  <button 
                    className="action-button"
                    onClick={() => handleInstanceAction('restart', instance.id)}
                  >
                    <RefreshCw size={16} />
                  </button>
                  <button 
                    className="action-button delete"
                    onClick={() => handleInstanceAction('delete', instance.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create New Instance</h2>
            {/* Add form fields here */}
            <button onClick={() => setShowCreateModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudDashboardPage;