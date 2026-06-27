import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function SuperAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "tnt_101",
    "c2": "Acme Corp",
    "c3": "Enterprise",
    "c4": "$4,990",
    "c5": "Good",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "tnt_102",
    "c2": "Stark Ind.",
    "c3": "Enterprise",
    "c4": "$9,990",
    "c5": "Good",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "tnt_103",
    "c2": "Wayne Ent.",
    "c3": "Pro",
    "c4": "$990",
    "c5": "Warning",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "tnt_104",
    "c2": "Umbrella Corp",
    "c3": "Enterprise",
    "c4": "$15,000",
    "c5": "Critical",
    "c6": "Suspended"
  },
  {
    "id": 5,
    "c1": "tnt_105",
    "c2": "Small Biz",
    "c3": "Startup",
    "c4": "$49",
    "c5": "Good",
    "c6": "Active"
  },
  {
    "id": 6,
    "c1": "tnt_106",
    "c2": "Cyberdyne",
    "c3": "Pro",
    "c4": "$990",
    "c5": "Good",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "tnt_107",
    "c2": "Initech",
    "c3": "Startup",
    "c4": "$49",
    "c5": "Good",
    "c6": "Active"
  },
  {
    "id": 8,
    "c1": "tnt_108",
    "c2": "Massive Dynamic",
    "c3": "Enterprise",
    "c4": "$4,990",
    "c5": "Good",
    "c6": "Active"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Super Admin Dashboard"
      description="Global control center for the entire SaaS platform."
      toolbarActions={
        <Button onClick={() => setIsDrawerOpen(true)}>
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Plan</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">MRR</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Health</th>
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
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    row.c6 === 'Active' || row.c6 === 'Good'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : row.c6 === 'Suspended' || row.c6 === 'Failing' || row.c6 === 'Revoked' || row.c6 === 'Critical'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {row.c6 || 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button onClick={() => setIsDrawerOpen(true)} className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800 transition-colors">
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
  <StatCard title="Total Revenue (MRR)" value="$1.2M" icon="DollarSign" trend="+15%" color="green" />
  <StatCard title="Active Subscriptions" value="12,450" icon="CreditCard" trend="+450" color="purple" />
  <StatCard title="Open Support Tickets" value="45" icon="LifeBuoy" trend="-5" color="orange" />
  <StatCard title="System Health" value="99.9%" icon="Activity" trend="Optimal" color="green" />
  <StatCard title="Database Load" value="42%" icon="HardDrive" trend="Normal" color="blue" />
</div>
    </UniversalCRUDLayout>
  );
}
