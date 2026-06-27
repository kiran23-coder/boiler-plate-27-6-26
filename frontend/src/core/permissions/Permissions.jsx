import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';

export function Permissions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "Dashboard",
    "c2": "✔️",
    "c3": "❌",
    "c4": "❌",
    "c5": "❌",
    "c6": "❌",
    "c7": "✔️",
    "c8": "❌"
  },
  {
    "id": 2,
    "c1": "Users",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "✔️",
    "c5": "✔️",
    "c6": "✔️",
    "c7": "✔️",
    "c8": "❌"
  },
  {
    "id": 3,
    "c1": "Roles",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "✔️",
    "c5": "❌",
    "c6": "❌",
    "c7": "❌",
    "c8": "❌"
  },
  {
    "id": 4,
    "c1": "Storage",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "✔️",
    "c5": "✔️",
    "c6": "✔️",
    "c7": "✔️",
    "c8": "❌"
  },
  {
    "id": 5,
    "c1": "Billing",
    "c2": "✔️",
    "c3": "❌",
    "c4": "❌",
    "c5": "❌",
    "c6": "❌",
    "c7": "✔️",
    "c8": "✔️"
  },
  {
    "id": 6,
    "c1": "Reports",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "✔️",
    "c5": "✔️",
    "c6": "❌",
    "c7": "✔️",
    "c8": "❌"
  },
  {
    "id": 7,
    "c1": "API Keys",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "❌",
    "c5": "✔️",
    "c6": "❌",
    "c7": "❌",
    "c8": "❌"
  },
  {
    "id": 8,
    "c1": "Workflows",
    "c2": "✔️",
    "c3": "✔️",
    "c4": "✔️",
    "c5": "✔️",
    "c6": "✔️",
    "c7": "✔️",
    "c8": "✔️"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
    <UniversalCRUDLayout
      title="Permission Matrix"
      description="Configure granular permission sets across all modules."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Module</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">View</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Create</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Update</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Delete</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Import</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Export</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Approve</th>
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
      
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Add/Edit Permission Matrix">
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="Enter name..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
            <textarea className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" rows="3" placeholder="Enter details..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
            <select className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="pt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsDrawerOpen(false)}>Save Changes</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
