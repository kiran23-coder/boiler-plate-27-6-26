import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';

export function Departments() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Engineering",
    "c2": "Acme Corp",
    "c3": "Alice Freeman",
    "c4": "250",
    "c5": "$5.2M",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "Sales",
    "c2": "Acme Corp",
    "c3": "Bob Smith",
    "c4": "150",
    "c5": "$1.8M",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "R&D",
    "c2": "Stark Industries",
    "c3": "Tony Stark",
    "c4": "5,000",
    "c5": "$150M",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "Applied Sciences",
    "c2": "Wayne Enterprises",
    "c3": "Lucius Fox",
    "c4": "400",
    "c5": "$85M",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "Virology",
    "c2": "Umbrella Corp",
    "c3": "Albert Wesker",
    "c4": "1,200",
    "c5": "$200M",
    "c6": "Active"
  },
  {
    "id": 6,
    "c1": "Robotics",
    "c2": "Cyberdyne Systems",
    "c3": "Miles Dyson",
    "c4": "250",
    "c5": "$40M",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "IT Support",
    "c2": "Initech",
    "c3": "Michael Bolton",
    "c4": "50",
    "c5": "$500k",
    "c6": "Active"
  },
  {
    "id": 8,
    "c1": "Nucleus Project",
    "c2": "Hooli",
    "c3": "Gavin Belson",
    "c4": "2,000",
    "c5": "$100M",
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
      title="Departments"
      description="Manage departments within organizations."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Department</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Organization</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Head of Department</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Employees</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Budget</th>
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
