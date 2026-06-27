import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';

export function Features() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "Custom Domains",
    "c2": "feat_domains",
    "c3": "Pro, Enterprise",
    "c4": "Unlimited",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 2,
    "c1": "API Access",
    "c2": "feat_api",
    "c3": "Pro, Enterprise",
    "c4": "10k/mo",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 3,
    "c1": "White Labeling",
    "c2": "feat_whitelabel",
    "c3": "Enterprise",
    "c4": "N/A",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 4,
    "c1": "AI Assistant",
    "c2": "feat_ai",
    "c3": "Startup, Pro, Enterprise",
    "c4": "100 queries/mo",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 5,
    "c1": "Advanced Reports",
    "c2": "feat_reports",
    "c3": "Pro, Enterprise",
    "c4": "N/A",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 6,
    "c1": "SSO Login",
    "c2": "feat_sso",
    "c3": "Enterprise",
    "c4": "Unlimited",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 7,
    "c1": "Priority Support",
    "c2": "feat_support",
    "c3": "Enterprise",
    "c4": "24/7",
    "c5": "System",
    "c6": "Active"
  },
  {
    "id": 8,
    "c1": "Beta Dashboard",
    "c2": "feat_beta_dash",
    "c3": "All",
    "c4": "N/A",
    "c5": "System",
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
      title="Feature Toggles"
      description="Manage what features are available per plan."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Feature Name</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Key</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Available In</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Usage Limit</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Created By</th>
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
