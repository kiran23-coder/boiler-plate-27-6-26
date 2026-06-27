import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Sessions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "Alice Freeman",
    "c2": "Chrome 120",
    "c3": "macOS 14",
    "c4": "Desktop",
    "c5": "192.168.1.1",
    "c6": "New York, US",
    "c7": "Just now",
    "c8": "Active"
  },
  {
    "id": 2,
    "c1": "Bob Smith",
    "c2": "Safari 17",
    "c3": "iOS 17",
    "c4": "Mobile",
    "c5": "10.0.0.5",
    "c6": "London, UK",
    "c7": "5 mins ago",
    "c8": "Active"
  },
  {
    "id": 3,
    "c1": "Charlie Davis",
    "c2": "Edge 119",
    "c3": "Windows 11",
    "c4": "Desktop",
    "c5": "172.16.0.4",
    "c6": "Berlin, DE",
    "c7": "1 hour ago",
    "c8": "Active"
  },
  {
    "id": 4,
    "c1": "Diana Prince",
    "c2": "Firefox 121",
    "c3": "Ubuntu 22.04",
    "c4": "Desktop",
    "c5": "192.168.2.10",
    "c6": "Paris, FR",
    "c7": "2 hours ago",
    "c8": "Expired"
  },
  {
    "id": 5,
    "c1": "Evan Wright",
    "c2": "Chrome Mobile",
    "c3": "Android 14",
    "c4": "Mobile",
    "c5": "10.1.1.20",
    "c6": "Tokyo, JP",
    "c7": "Just now",
    "c8": "Active"
  },
  {
    "id": 6,
    "c1": "Fiona Gallagher",
    "c2": "Safari 16",
    "c3": "macOS 13",
    "c4": "Desktop",
    "c5": "172.16.1.5",
    "c6": "Sydney, AU",
    "c7": "3 days ago",
    "c8": "Blocked"
  },
  {
    "id": 7,
    "c1": "George Miller",
    "c2": "Opera",
    "c3": "Windows 10",
    "c4": "Desktop",
    "c5": "192.168.1.50",
    "c6": "Toronto, CA",
    "c7": "15 mins ago",
    "c8": "Active"
  },
  {
    "id": 8,
    "c1": "Hannah Abbott",
    "c2": "Chrome 120",
    "c3": "macOS 14",
    "c4": "Desktop",
    "c5": "10.0.0.12",
    "c6": "Dubai, UAE",
    "c7": "Yesterday",
    "c8": "Expired"
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
      title="Active Sessions"
      description="Monitor and terminate active user sessions."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">User</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Browser</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">OS</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Device</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">IP Address</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Location</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Last Activity</th>
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
  <StatCard title="Active Sessions" value="1,204" icon="Monitor" trend="+24" color="green" />
  <StatCard title="Expired Sessions" value="8,432" icon="Clock" trend="+120" color="blue" />
  <StatCard title="Blocked Sessions" value="12" icon="Ban" trend="-2" color="red" />
</div>
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Add/Edit Active Sessions">
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
