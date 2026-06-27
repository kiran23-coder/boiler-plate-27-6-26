import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Companies() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "tnt_101",
    "c2": "Acme Corp",
    "c3": "Enterprise",
    "c4": "1,245",
    "c5": "12.4 GB",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "tnt_102",
    "c2": "Stark Ind.",
    "c3": "Enterprise",
    "c4": "8,432",
    "c5": "45.1 GB",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "tnt_103",
    "c2": "Wayne Ent.",
    "c3": "Pro",
    "c4": "5,102",
    "c5": "18.2 GB",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "tnt_104",
    "c2": "Small Biz",
    "c3": "Startup",
    "c4": "12",
    "c5": "1.2 GB",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "tnt_105",
    "c2": "Umbrella",
    "c3": "Enterprise",
    "c4": "9,500",
    "c5": "120.5 GB",
    "c6": "Suspended"
  },
  {
    "id": 6,
    "c1": "tnt_106",
    "c2": "Test Org",
    "c3": "Free",
    "c4": "2",
    "c5": "0.1 GB",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "tnt_107",
    "c2": "Cyberdyne",
    "c3": "Pro",
    "c4": "450",
    "c5": "8.4 GB",
    "c6": "Active"
  },
  {
    "id": 8,
    "c1": "tnt_108",
    "c2": "Initech",
    "c3": "Startup",
    "c4": "150",
    "c5": "3.2 GB",
    "c6": "Pending"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Tenants"
      description="Manage all isolated tenants and organizations on the platform."
      toolbarActions={
        <Button>
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
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Tenant ID</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Tenant Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Plan</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Users</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Database Size</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
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
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.c6}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    row.c7 === 'Active' || row.c7 === 'Success' || row.c7 === 'Trusted' || row.c7 === 'Verified' || row.c7 === 'Paid' || row.c7 === 'System' || row.c7 === 'Published' || row.c7 === 'Enabled'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : row.c7 === 'Expired' || row.c7 === 'Failed' || row.c7 === 'Blocked' || row.c7 === 'Suspended' || row.c7 === 'Archived' || row.c7 === 'Disabled'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {row.c7 || row.c6 || row.c5 || 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-red-500 dark:hover:bg-slate-800 transition-colors">
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
  <StatCard title="Total Tenants" value="452" icon="Database" trend="+12" color="blue" />
  <StatCard title="Active Plans" value="410" icon="CreditCard" trend="+8" color="green" />
  <StatCard title="Custom Domains" value="120" icon="Globe" trend="+5" color="purple" />
  <StatCard title="Total Storage" value="45.2 TB" icon="HardDrive" trend="+1.2 TB" color="orange" />
</div>
    </UniversalCRUDLayout>
  );
}
