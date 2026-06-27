import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "evt_101",
    "c2": "user.created",
    "c3": "alice@acme.com",
    "c4": "usr_501",
    "c5": "192.168.1.1",
    "c6": "2 mins ago"
  },
  {
    "id": 2,
    "c1": "evt_102",
    "c2": "role.updated",
    "c3": "admin@system",
    "c4": "rol_99",
    "c5": "10.0.0.1",
    "c6": "15 mins ago"
  },
  {
    "id": 3,
    "c1": "evt_103",
    "c2": "setting.changed",
    "c3": "bob@stark.com",
    "c4": "set_auth",
    "c5": "172.16.0.4",
    "c6": "1 hour ago"
  },
  {
    "id": 4,
    "c1": "evt_104",
    "c2": "api_key.deleted",
    "c3": "charlie@wayne",
    "c4": "key_404",
    "c5": "192.168.2.10",
    "c6": "2 hours ago"
  },
  {
    "id": 5,
    "c1": "evt_105",
    "c2": "tenant.suspended",
    "c3": "system",
    "c4": "tnt_105",
    "c5": "127.0.0.1",
    "c6": "Yesterday"
  },
  {
    "id": 6,
    "c1": "evt_106",
    "c2": "invoice.paid",
    "c3": "stripe_webhook",
    "c4": "inv_2026",
    "c5": "3.3.3.3",
    "c6": "Yesterday"
  },
  {
    "id": 7,
    "c1": "evt_107",
    "c2": "user.deleted",
    "c3": "diana@them.gov",
    "c4": "usr_802",
    "c5": "10.1.1.20",
    "c6": "2 days ago"
  },
  {
    "id": 8,
    "c1": "evt_108",
    "c2": "login.failed",
    "c3": "unknown",
    "c4": "usr_admin",
    "c5": "45.22.11.9",
    "c6": "2 days ago"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Audit Logs"
      description="Immutable record of system-wide changes."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Event ID</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Action</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Actor</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Resource</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">IP Address</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Timestamp</th>
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
  <StatCard title="Total Events" value="1.2M" icon="Activity" trend="+45k" color="blue" />
  <StatCard title="Critical Events" value="12" icon="AlertTriangle" trend="-2" color="orange" />
  <StatCard title="Security Alerts" value="4" icon="ShieldAlert" trend="0" color="red" />
  <StatCard title="Storage Used" value="4.5 GB" icon="Database" trend="+120 MB" color="purple" />
</div>
    </UniversalCRUDLayout>
  );
}
