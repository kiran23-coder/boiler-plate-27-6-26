import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Organizations() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Acme Corp",
    "c2": "Alice Freeman",
    "c3": "1,245",
    "c4": "12",
    "c5": "Active",
    "c6": "Jan 10, 2024"
  },
  {
    "id": 2,
    "c1": "Stark Industries",
    "c2": "Tony Stark",
    "c3": "8,432",
    "c4": "45",
    "c5": "Active",
    "c6": "Feb 15, 2024"
  },
  {
    "id": 3,
    "c1": "Wayne Enterprises",
    "c2": "Bruce Wayne",
    "c3": "5,102",
    "c4": "20",
    "c5": "Active",
    "c6": "Mar 20, 2024"
  },
  {
    "id": 4,
    "c1": "Umbrella Corp",
    "c2": "Albert Wesker",
    "c3": "9,500",
    "c4": "105",
    "c5": "Suspended",
    "c6": "Apr 05, 2024"
  },
  {
    "id": 5,
    "c1": "Cyberdyne Systems",
    "c2": "Miles Dyson",
    "c3": "450",
    "c4": "2",
    "c5": "Active",
    "c6": "May 12, 2024"
  },
  {
    "id": 6,
    "c1": "Massive Dynamic",
    "c2": "William Bell",
    "c3": "3,200",
    "c4": "8",
    "c5": "Active",
    "c6": "Jun 18, 2024"
  },
  {
    "id": 7,
    "c1": "Initech",
    "c2": "Bill Lumbergh",
    "c3": "150",
    "c4": "1",
    "c5": "Pending",
    "c6": "Jul 22, 2024"
  },
  {
    "id": 8,
    "c1": "Hooli",
    "c2": "Gavin Belson",
    "c3": "12,000",
    "c4": "30",
    "c5": "Active",
    "c6": "Aug 30, 2024"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Organizations"
      description="Manage parent organizations within the platform."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Organization</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Owner</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Total Users</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Branches</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Created</th>
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
  <StatCard title="Total Organizations" value="1,245" icon="Building2" trend="+15" color="blue" />
  <StatCard title="Total Branches" value="4,532" icon="MapPin" trend="+45" color="green" />
  <StatCard title="Total Departments" value="12,402" icon="Briefcase" trend="+120" color="purple" />
  <StatCard title="Total Teams" value="45,210" icon="Users" trend="+400" color="orange" />
</div>
    </UniversalCRUDLayout>
  );
}
