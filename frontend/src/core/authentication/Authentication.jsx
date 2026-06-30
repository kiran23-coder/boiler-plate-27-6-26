import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Authentication() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [data, setData] = useState([
  {
    "id": 1,
    "c1": "Google Workspace",
    "c2": "google-client-***",
    "c3": "Active",
    "c4": "12,450",
    "c5": "2 mins ago"
  },
  {
    "id": 2,
    "c1": "Microsoft Entra ID",
    "c2": "ms-auth-***",
    "c3": "Active",
    "c4": "8,321",
    "c5": "1 hour ago"
  },
  {
    "id": 3,
    "c1": "GitHub OAuth",
    "c2": "gh-app-***",
    "c3": "Active",
    "c4": "5,102",
    "c5": "Yesterday"
  },
  {
    "id": 4,
    "c1": "Okta SAML",
    "c2": "okta-saml-***",
    "c3": "Inactive",
    "c4": "0",
    "c5": "Never"
  },
  {
    "id": 5,
    "c1": "Local DB",
    "c2": "Internal",
    "c3": "Active",
    "c4": "19,358",
    "c5": "Real-time"
  },
  {
    "id": 6,
    "c1": "Apple ID",
    "c2": "apple-client-***",
    "c3": "Pending",
    "c4": "0",
    "c5": "Never"
  },
  {
    "id": 7,
    "c1": "Twitter OAuth",
    "c2": "tw-app-***",
    "c3": "Active",
    "c4": "802",
    "c5": "2 days ago"
  },
  {
    "id": 8,
    "c1": "LinkedIn Login",
    "c2": "li-app-***",
    "c3": "Inactive",
    "c4": "0",
    "c5": "Never"
  }
]);

  
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ c1: '', c2: '', c3: '', c4: '', c5: '' });

  const handleOpenDrawer = (row = null) => {
    if (row) {
      setEditingId(row.id);
      setFormData(row);
    } else {
      setEditingId(null);
      setFormData({ c1: '', c2: '', c3: '', c4: '', c5: '' });
    }
    setIsDrawerOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      setData(data.map(d => d.id === editingId ? { ...formData, id: editingId } : d));
    } else {
      setData([{ ...formData, id: Date.now() }, ...data]);
    }
    setIsDrawerOpen(false);
  };

  const handleDelete = (id) => {
    setData(data.filter(d => d.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
    <UniversalCRUDLayout
      title="Authentication"
      description="Manage SSO providers, local login policies, and 2FA settings."
      toolbarActions={
        <Button onClick={() => handleOpenDrawer()}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      }
      searchProps={{
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        placeholder: "Search..."
      }}
      hasData={filteredData.length > 0}
      table={
        <table className="w-full whitespace-nowrap text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900/50 dark:text-white text-slate-900">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Provider</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Client ID</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Users Configured</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Last Synced</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-slate-200">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-transparent">
            {filteredData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.c1}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.c2}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.c3}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.c4}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.c5}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    row.c6 === 'Active' || row.c6 === 'Success' || row.c6 === 'Trusted' || row.c6 === 'Indexed' || row.c6 === 'Published'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : row.c6 === 'Expired' || row.c6 === 'Failed' || row.c6 === 'Blocked' || row.c6 === 'Suspended' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {row.c6}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button onClick={() => handleOpenDrawer(row)} className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-red-500 dark:hover:bg-slate-800 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard title="Total Auth Users" value={data.reduce((sum, d) => sum + (parseInt(String(d.c4).replace(/,/g, '')) || 0), 0).toLocaleString()} icon="Users" trend={`across ${data.length} providers`} color="blue" />
        <StatCard title="Active Providers" value={data.filter(d => d.c3 === 'Active').length.toString()} icon="Activity" trend={`out of ${data.length} total`} color="green" />
        <StatCard title="Pending Configs" value={data.filter(d => d.c3 === 'Pending').length.toString()} icon="AlertTriangle" trend="needs attention" color="red" />
        <StatCard title="Inactive Providers" value={data.filter(d => d.c3 === 'Inactive').length.toString()} icon="ShieldCheck" trend="disabled" color="purple" />
      </div>
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title={editingId ? "Edit Record" : "Add Record"}>
      <div className="space-y-4 mt-4">
          <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Provider</label>
          <select name="c1" value={formData.c1} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700">
            <option value="">Select Provider...</option>
            <option value="Google Workspace">Google Workspace</option>
            <option value="Microsoft Entra ID">Microsoft Entra ID</option>
            <option value="GitHub OAuth">GitHub OAuth</option>
            <option value="Okta SAML">Okta SAML</option>
            <option value="Local DB">Local DB</option>
            <option value="Apple ID">Apple ID</option>
            <option value="Twitter OAuth">Twitter OAuth</option>
            <option value="LinkedIn Login">LinkedIn Login</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
          <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Client ID</label>
          <input name="c2" value={formData.c2} onChange={handleChange} type="text" className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="Enter Client ID..." />
        </div>
          <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
          <select name="c3" value={formData.c3} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
          <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Users Configured</label>
          <input name="c4" value={formData.c4} onChange={handleChange} type="text" className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="Enter Users Configured..." />
        </div>
          <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Synced</label>
          <input name="c5" value={formData.c5} onChange={handleChange} type="text" className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="Enter Last Synced..." />
        </div>
        <div className="pt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </Drawer>
    </>
  );
}
