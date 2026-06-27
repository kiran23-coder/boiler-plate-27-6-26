import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';

export function Branding() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Acme Corp",
    "c2": "#0F172A",
    "c3": "/logos/acme.png",
    "c4": "Inter",
    "c5": "Enabled",
    "c6": "Published"
  },
  {
    "id": 2,
    "c1": "Stark Ind.",
    "c2": "#E11D48",
    "c3": "/logos/stark.png",
    "c4": "Roboto",
    "c5": "Disabled",
    "c6": "Draft"
  },
  {
    "id": 3,
    "c1": "Wayne Ent.",
    "c2": "#000000",
    "c3": "/logos/wayne.png",
    "c4": "Arial",
    "c5": "Enabled",
    "c6": "Published"
  },
  {
    "id": 4,
    "c1": "Small Biz",
    "c2": "#3B82F6",
    "c3": "/logos/sb.png",
    "c4": "Inter",
    "c5": "Disabled",
    "c6": "Published"
  },
  {
    "id": 5,
    "c1": "Umbrella",
    "c2": "#DC2626",
    "c3": "/logos/umb.png",
    "c4": "Helvetica",
    "c5": "Enabled",
    "c6": "Published"
  },
  {
    "id": 6,
    "c1": "Cyberdyne",
    "c2": "#4F46E5",
    "c3": "/logos/cyb.png",
    "c4": "Inter",
    "c5": "Enabled",
    "c6": "Published"
  },
  {
    "id": 7,
    "c1": "Initech",
    "c2": "#059669",
    "c3": "/logos/ini.png",
    "c4": "Times New Roman",
    "c5": "Disabled",
    "c6": "Draft"
  },
  {
    "id": 8,
    "c1": "Hooli",
    "c2": "#F59E0B",
    "c3": "/logos/hooli.png",
    "c4": "Roboto",
    "c5": "Enabled",
    "c6": "Published"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Branding Settings"
      description="White-labeling configurations per tenant."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Tenant</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Primary Color</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Logo URL</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Font</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Custom CSS</th>
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
      
    </UniversalCRUDLayout>
  );
}
