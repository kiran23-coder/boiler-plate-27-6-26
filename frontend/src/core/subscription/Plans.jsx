import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Plans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const data = [
  {
    "id": 1,
    "c1": "Free Tier",
    "c2": "$0",
    "c3": "$0",
    "c4": "12,450",
    "c5": "Basic",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "Startup Plan",
    "c2": "$49",
    "c3": "$490",
    "c4": "3,200",
    "c5": "Standard",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "Pro Plan",
    "c2": "$99",
    "c3": "$990",
    "c4": "1,500",
    "c5": "Advanced",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "Enterprise",
    "c2": "$499",
    "c3": "$4990",
    "c4": "410",
    "c5": "Unlimited",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "Legacy V1",
    "c2": "$29",
    "c3": "$290",
    "c4": "150",
    "c5": "Basic",
    "c6": "Archived"
  },
  {
    "id": 6,
    "c1": "Beta Tester",
    "c2": "$0",
    "c3": "$0",
    "c4": "500",
    "c5": "Unlimited",
    "c6": "Archived"
  },
  {
    "id": 7,
    "c1": "Custom Plan A",
    "c2": "$999",
    "c3": "$9990",
    "c4": "12",
    "c5": "Custom",
    "c6": "Active"
  },
  {
    "id": 8,
    "c1": "Custom Plan B",
    "c2": "$2999",
    "c3": "$29990",
    "c4": "2",
    "c5": "Custom",
    "c6": "Active"
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
      title="Pricing Plans"
      description="Manage SaaS tiers and recurring pricing."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Plan Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Price (Monthly)</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Price (Annual)</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Subscribers</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Features Limit</th>
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
  <StatCard title="Total Revenue (MRR)" value="$1.2M" icon="DollarSign" trend="+15%" color="green" />
  <StatCard title="Active Trials" value="4,532" icon="Clock" trend="+20%" color="orange" />
  <StatCard title="Active Paid Plans" value="410" icon="CreditCard" trend="+5%" color="blue" />
  <StatCard title="Churn Rate" value="2.4%" icon="TrendingDown" trend="-0.5%" color="red" />
</div>
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Add/Edit Subscription Plan">
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Plan Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="e.g. Pro, Enterprise" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Monthly Price ($)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" placeholder="29.00" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Features (comma separated)</label>
            <textarea className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700" rows="3" placeholder="Unlimited Users, 100GB Storage, API Access..."></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Billing Cycle</label>
              <select className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700">
                <option>Monthly</option>
                <option>Annual</option>
                <option>One-time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
              <select className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700">
                <option>Active</option>
                <option>Hidden</option>
                <option>Legacy</option>
              </select>
            </div>
          </div>
          <div className="pt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsDrawerOpen(false)}>Save Plan</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
