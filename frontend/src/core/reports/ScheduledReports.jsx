import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function ScheduledReports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "Weekly Revenue Summary",
    "c2": "Financial",
    "c3": "Every Monday 9AM",
    "c4": "finance@acme.com",
    "c5": "Yesterday",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "Daily User Signups",
    "c2": "Growth",
    "c3": "Every Day 12AM",
    "c4": "marketing@acme.com",
    "c5": "Today",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "Monthly System Uptime",
    "c2": "IT",
    "c3": "1st of Month",
    "c4": "it@acme.com",
    "c5": "May 1",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "Quarterly Churn",
    "c2": "Retention",
    "c3": "Start of Quarter",
    "c4": "execs@acme.com",
    "c5": "Apr 1",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "Daily Error Logs",
    "c2": "Engineering",
    "c3": "Every Day 1AM",
    "c4": "devs@acme.com",
    "c5": "Today",
    "c6": "Active"
  },
  {
    "id": 6,
    "c1": "Weekly Support Tickets",
    "c2": "Support",
    "c3": "Every Friday 5PM",
    "c4": "support@acme.com",
    "c5": "Last Friday",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "Old Inactive Users",
    "c2": "Growth",
    "c3": "Every Month",
    "c4": "growth@acme.com",
    "c5": "Never",
    "c6": "Paused"
  },
  {
    "id": 8,
    "c1": "API Usage Stats",
    "c2": "Engineering",
    "c3": "Every Sunday 11PM",
    "c4": "api@acme.com",
    "c5": "Last Sunday",
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
      title="Scheduled Reports"
      description="Automated report generation and delivery."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Report Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Type</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Schedule</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Recipients</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Last Run</th>
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
  <StatCard title="Total Reports" value="45" icon="FileText" trend="+5" color="blue" />
  <StatCard title="Delivered (30d)" value="1,245" icon="Send" trend="+120" color="green" />
  <StatCard title="Failed Deliveries" value="2" icon="AlertTriangle" trend="0" color="red" />
  <StatCard title="Saved Templates" value="18" icon="Save" trend="+2" color="purple" />
</div>
    </UniversalCRUDLayout>
  );
}
