import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function NotificationLogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "alice@acme.com",
    "c2": "Email",
    "c3": "Welcome to Platform!",
    "c4": "SendGrid",
    "c5": "Delivered",
    "c6": "2 mins ago"
  },
  {
    "id": 2,
    "c1": "+1 555-0192",
    "c2": "SMS",
    "c3": "Your OTP is 492011",
    "c4": "Twilio",
    "c5": "Delivered",
    "c6": "5 mins ago"
  },
  {
    "id": 3,
    "c1": "device_xyz123",
    "c2": "Push",
    "c3": "New message from Bob",
    "c4": "FCM",
    "c5": "Delivered",
    "c6": "10 mins ago"
  },
  {
    "id": 4,
    "c1": "+44 7700 9000",
    "c2": "WhatsApp",
    "c3": "Invoice INV-002 is due",
    "c4": "Meta API",
    "c5": "Failed",
    "c6": "15 mins ago"
  },
  {
    "id": 5,
    "c1": "bob@stark.com",
    "c2": "Email",
    "c3": "Password Reset",
    "c4": "SendGrid",
    "c5": "Delivered",
    "c6": "1 hour ago"
  },
  {
    "id": 6,
    "c1": "charlie@wayne.com",
    "c2": "Email",
    "c3": "Weekly Report",
    "c4": "SendGrid",
    "c5": "Queued",
    "c6": "Pending"
  },
  {
    "id": 7,
    "c1": "+1 555-9831",
    "c2": "SMS",
    "c3": "Alert: Login from new IP",
    "c4": "Twilio",
    "c5": "Delivered",
    "c6": "Yesterday"
  },
  {
    "id": 8,
    "c1": "diana@them.gov",
    "c2": "Email",
    "c3": "Subscription Active",
    "c4": "SendGrid",
    "c5": "Bounced",
    "c6": "2 days ago"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="Notification Logs"
      description="Audit trail of all sent notifications across Email, SMS, Push, and WhatsApp."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Recipient</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Channel</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Subject / Snippet</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Provider</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Sent At</th>
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
  <StatCard title="Emails Sent" value="14,231" icon="Mail" trend="+12%" color="blue" />
  <StatCard title="SMS Sent" value="4,104" icon="MessageSquare" trend="+5%" color="green" />
  <StatCard title="Push Sent" value="42,100" icon="BellRing" trend="+20%" color="purple" />
  <StatCard title="Failed Delivery" value="12" icon="AlertTriangle" trend="-2%" color="red" />
</div>
    </UniversalCRUDLayout>
  );
}
