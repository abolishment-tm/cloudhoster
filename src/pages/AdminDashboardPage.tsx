import React, { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useContentStore } from '../stores/useContentStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Save,
  X,
  Search,
  Settings,
  Users,
  FileText,
  DollarSign,
  Package,
  Globe,
  LogOut,
  BarChart
} from 'lucide-react';
import AnalyticsDashboard from '../components/Analytics/AnalyticsDashboard';

interface Content {
  id: string;
  type: string;
  key: string;
  value: string;
  language: string;
  lastUpdated: string;
}

const AdminDashboardPage = () => {
  const { contents, loading, error, fetchContents, updateContent, createContent, deleteContent } = useContentStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'analytics' | 'content'>('analytics');
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const columnHelper = createColumnHelper<Content>();
  const columns = [
    columnHelper.accessor('type', {
      header: 'Type',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('key', {
      header: 'Key',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('value', {
      header: 'Value',
      cell: info => {
        const content = info.row.original;
        if (editingId === content.id) {
          return (
            <input
              defaultValue={info.getValue()}
              className="w-full p-2 border rounded"
              {...register('value')}
            />
          );
        }
        return info.getValue();
      },
    }),
    columnHelper.accessor('language', {
      header: 'Language',
      cell: info => info.getValue().toUpperCase(),
    }),
    columnHelper.accessor('lastUpdated', {
      header: 'Last Updated',
      cell: info => new Date(info.getValue()).toLocaleString(),
    }),
    columnHelper.display({
      id: 'actions',
      cell: info => {
        const content = info.row.original;
        if (editingId === content.id) {
          return (
            <div className="flex gap-2">
              <button
                onClick={handleSubmit(data => {
                  updateContent(content.id, data.value);
                  setEditingId(null);
                  toast.success('Content updated successfully');
                })}
                className="p-2 text-green-600 hover:text-green-800"
              >
                <Save size={16} />
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <X size={16} />
              </button>
            </div>
          );
        }
        return (
          <div className="flex gap-2">
            <button
              onClick={() => setEditingId(content.id)}
              className="p-2 text-blue-600 hover:text-blue-800"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this content?')) {
                  deleteContent(content.id);
                  toast.success('Content deleted successfully');
                }
              }}
              className="p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 size={16} />
            </button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: contents,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-sm">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <nav className="mt-6">
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center px-6 py-3 text-gray-700 w-full text-left ${
                activeTab === 'analytics' ? 'bg-gray-100 border-r-4 border-indigo-500' : ''
              }`}
            >
              <BarChart className="w-5 h-5 mr-3" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('content')} 
              className={`flex items-center px-6 py-3 text-gray-700 w-full text-left ${
                activeTab === 'content' ? 'bg-gray-100 border-r-4 border-indigo-500' : ''
              }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              Content
            </button>
            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-3" />
              Users
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <DollarSign className="w-5 h-5 mr-3" />
              Pricing
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <Package className="w-5 h-5 mr-3" />
              Products
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <Globe className="w-5 h-5 mr-3" />
              Domains
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
          </nav>
          <div className="absolute bottom-0 w-full p-6">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="ml-64 flex-1">
          {activeTab === 'analytics' ? (
            <AnalyticsDashboard />
          ) : (
            <div className="p-8">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Content Management</h2>
                <button
                  onClick={() => setIsCreating(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add New Content
                </button>
              </div>

              {/* Search bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search content..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Content table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map(header => (
                            <th
                              key={header.id}
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                          {row.getVisibleCells().map(cell => (
                            <td
                              key={cell.id}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create content modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Create New Content</h3>
            <form onSubmit={handleSubmit(data => {
              createContent(data as any);
              setIsCreating(false);
              reset();
              toast.success('Content created successfully');
            })}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <input
                    {...register('type')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Key</label>
                  <input
                    {...register('key')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Value</label>
                  <textarea
                    {...register('value')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select
                    {...register('language')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="en">English</option>
                    <option value="id">Indonesian</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;