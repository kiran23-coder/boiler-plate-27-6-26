import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';

export function Branches() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "HQ - New York",
    "c2": "Acme Corp",
    "c3": "Alice Freeman",
    "c4": "450",
    "c5": "New York",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "London Office",
    "c2": "Acme Corp",
    "c3": "Bob Smith",
    "c4": "120",
    "c5": "London",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "Stark Tower NY",
    "c2": "Stark Industries",
    "c3": "Pepper Potts",
    "c4": "1,200",
    "c5": "New York",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "Wayne Tower GC",
    "c2": "Wayne Enterprises",
    "c3": "Lucius Fox",
    "c4": "800",
    "c5": "Gotham",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "Hive Lab",
    "c2": "Umbrella Corp",
    "c3": "William Birkin",
    "c4": "2,500",
    "c5": "Raccoon City",
    "c6": "Suspended"
  },
  {
    "id": 6,
    "c1": "Cyberdyne HQ",
    "c2": "Cyberdyne Systems",
    "c3": "John Connor",
    "c4": "300",
    "c5": "San Francisco",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "Initech Office",
    "c2": "Initech",
    "c3": "Peter Gibbons",
    "c4": "150",
    "c5": "Houston",
    "c6": "Pending"
  },
  {
    "id": 8,
    "c1": "Hooli Valley",
    "c2": "Hooli",
    "c3": "Richard Hendricks",
    "c4": "5,000",
    "c5": "Silicon Valley",
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
      title="Branches"
      description="Manage physical branches and office locations."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Branch Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Organization</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Manager</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Employees</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">City</th>
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
      
    </UniversalCRUDLayout>
  );
}
