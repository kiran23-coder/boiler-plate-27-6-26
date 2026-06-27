import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';

export function Teams() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Frontend Core",
    "c2": "Engineering",
    "c3": "Alice Freeman",
    "c4": "12",
    "c5": "High",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "Backend API",
    "c2": "Engineering",
    "c3": "Bob Smith",
    "c4": "15",
    "c5": "Medium",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "Iron Man Suit",
    "c2": "R&D",
    "c3": "Tony Stark",
    "c4": "50",
    "c5": "Critical",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "Batmobile",
    "c2": "Applied Sciences",
    "c3": "Lucius Fox",
    "c4": "25",
    "c5": "High",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "T-Virus",
    "c2": "Virology",
    "c3": "William Birkin",
    "c4": "120",
    "c5": "Critical",
    "c6": "Suspended"
  },
  {
    "id": 6,
    "c1": "T-800 AI",
    "c2": "Robotics",
    "c3": "Miles Dyson",
    "c4": "45",
    "c5": "High",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "Printer Maintenance",
    "c2": "IT Support",
    "c3": "Samir",
    "c4": "3",
    "c5": "Low",
    "c6": "Pending"
  },
  {
    "id": 8,
    "c1": "Middle-Out Alg",
    "c2": "Nucleus Project",
    "c3": "Richard",
    "c4": "8",
    "c5": "High",
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
      title="Teams"
      description="Manage individual teams within departments."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Team</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Department</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Lead</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Members</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Velocity / Output</th>
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
