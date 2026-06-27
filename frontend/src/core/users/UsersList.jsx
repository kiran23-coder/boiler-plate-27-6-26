import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function UsersList() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Alice Freeman",
    "c2": "alice@acme.com",
    "c3": "Super Admin",
    "c4": "Acme Corp",
    "c5": "Active",
    "c6": "Today"
  },
  {
    "id": 2,
    "c1": "Bob Smith",
    "c2": "bob@stark.com",
    "c3": "Admin",
    "c4": "Stark Ind.",
    "c5": "Active",
    "c6": "Yesterday"
  },
  {
    "id": 3,
    "c1": "Charlie Davis",
    "c2": "charlie@wayne.com",
    "c3": "Manager",
    "c4": "Wayne Ent.",
    "c5": "Suspended",
    "c6": "1 month ago"
  },
  {
    "id": 4,
    "c1": "Diana Prince",
    "c2": "diana@themyscira.gov",
    "c3": "Staff",
    "c4": "Themyscira",
    "c5": "Active",
    "c6": "Today"
  },
  {
    "id": 5,
    "c1": "Evan Wright",
    "c2": "evan@hooli.com",
    "c3": "Staff",
    "c4": "Hooli",
    "c5": "Pending",
    "c6": "Never"
  },
  {
    "id": 6,
    "c1": "Fiona Gallagher",
    "c2": "fiona@acme.com",
    "c3": "Manager",
    "c4": "Acme Corp",
    "c5": "Active",
    "c6": "Today"
  },
  {
    "id": 7,
    "c1": "George Miller",
    "c2": "george@stark.com",
    "c3": "Staff",
    "c4": "Stark Ind.",
    "c5": "Active",
    "c6": "Today"
  },
  {
    "id": 8,
    "c1": "Hannah Abbott",
    "c2": "hannah@wayne.com",
    "c3": "Staff",
    "c4": "Wayne Ent.",
    "c5": "Active",
    "c6": "Yesterday"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Users"
      description="Manage platform users and their access levels."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Email</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Role</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Organization</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Last Login</th>
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
  <StatCard title="Total Users" value="45,231" icon="Users" trend="+12%" color="blue" />
  <StatCard title="Active Users" value="42,104" icon="CheckCircle" trend="+5%" color="green" />
  <StatCard title="Inactive Users" value="1,200" icon="XCircle" trend="-2%" color="red" />
  <StatCard title="Invited (Pending)" value="1,927" icon="Mail" trend="+15%" color="orange" />
</div>
    </UniversalCRUDLayout>
  );
}
