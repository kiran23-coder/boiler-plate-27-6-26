import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Files() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "q3_report.pdf",
    "c2": "PDF Document",
    "c3": "2.4 MB",
    "c4": "Alice Freeman",
    "c5": "Acme Corp",
    "c6": "2 mins ago"
  },
  {
    "id": 2,
    "c1": "logo_v2.png",
    "c2": "Image",
    "c3": "845 KB",
    "c4": "Bob Smith",
    "c5": "Stark Ind.",
    "c6": "1 hour ago"
  },
  {
    "id": 3,
    "c1": "user_export.csv",
    "c2": "Spreadsheet",
    "c3": "12.1 MB",
    "c4": "System",
    "c5": "Wayne Ent.",
    "c6": "Yesterday"
  },
  {
    "id": 4,
    "c1": "onboarding.mp4",
    "c2": "Video",
    "c3": "145.0 MB",
    "c4": "Diana Prince",
    "c5": "Acme Corp",
    "c6": "2 days ago"
  },
  {
    "id": 5,
    "c1": "contract_signed.pdf",
    "c2": "PDF Document",
    "c3": "1.2 MB",
    "c4": "Evan Wright",
    "c5": "Hooli",
    "c6": "Jan 15, 2026"
  },
  {
    "id": 6,
    "c1": "profile_pic.jpg",
    "c2": "Image",
    "c3": "450 KB",
    "c4": "Fiona Gallagher",
    "c5": "Acme Corp",
    "c6": "Jan 20, 2026"
  },
  {
    "id": 7,
    "c1": "backup_db.sql",
    "c2": "Database",
    "c3": "2.4 GB",
    "c4": "System Admin",
    "c5": "System",
    "c6": "Feb 01, 2026"
  },
  {
    "id": 8,
    "c1": "styles.css",
    "c2": "Code",
    "c3": "45 KB",
    "c4": "Developer",
    "c5": "System",
    "c6": "Feb 15, 2026"
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
      title="File Manager"
      description="Manage uploads, documents, and media assets."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">File Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Type</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Size</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Uploaded By</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Tenant</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Date</th>
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
                    row.c6 === 'Active' || row.c6 === 'Success' || row.c6 === 'Delivered' || row.c6 === 'Indexed' || row.c6 === 'Valid'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : row.c6 === 'Failed' || row.c6 === 'Bounced' || row.c6 === 'Invalid' || row.c6 === 'Timeout' 
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
  <StatCard title="Total Files" value="452,104" icon="File" trend="+1,200" color="blue" />
  <StatCard title="Storage Used" value="45.2 TB" icon="HardDrive" trend="+1.2 TB" color="orange" />
  <StatCard title="Available Space" value="54.8 TB" icon="Cloud" trend="" color="green" />
  <StatCard title="Folders" value="1,450" icon="Folder" trend="+12" color="purple" />
</div>
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Add/Edit File Manager">
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
