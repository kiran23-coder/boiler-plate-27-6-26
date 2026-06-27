import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Providers() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
  {
    "id": 1,
    "c1": "OpenAI",
    "c2": "gpt-4o",
    "c3": "Active",
    "c4": "85,000",
    "c5": "25.4M",
    "c6": "950ms"
  },
  {
    "id": 2,
    "c1": "Anthropic",
    "c2": "claude-3.5-sonnet",
    "c3": "Active",
    "c4": "45,000",
    "c5": "15.2M",
    "c6": "720ms"
  },
  {
    "id": 3,
    "c1": "Google",
    "c2": "gemini-1.5-pro",
    "c3": "Active",
    "c4": "15,000",
    "c5": "4.5M",
    "c6": "880ms"
  },
  {
    "id": 4,
    "c1": "Mistral",
    "c2": "mistral-large",
    "c3": "Inactive",
    "c4": "0",
    "c5": "0",
    "c6": "N/A"
  },
  {
    "id": 5,
    "c1": "Meta",
    "c2": "llama-3-70b",
    "c3": "Pending",
    "c4": "0",
    "c5": "0",
    "c6": "N/A"
  },
  {
    "id": 6,
    "c1": "OpenAI",
    "c2": "text-embedding-3-large",
    "c3": "Active",
    "c4": "120,000",
    "c5": "120.5M",
    "c6": "150ms"
  },
  {
    "id": 7,
    "c1": "Cohere",
    "c2": "command-r-plus",
    "c3": "Failed",
    "c4": "200",
    "c5": "45K",
    "c6": "Timeout"
  },
  {
    "id": 8,
    "c1": "Local",
    "c2": "llama-3-8b",
    "c3": "Active",
    "c4": "1,200",
    "c5": "1.2M",
    "c6": "450ms"
  }
];

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <UniversalCRUDLayout
      title="AI Providers"
      description="Configure integrations with LLM APIs."
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
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Provider</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Model</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Requests (30d)</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Tokens (30d)</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">Avg Latency</th>
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
  <StatCard title="Total Tokens Used" value="45.2M" icon="BrainCircuit" trend="+1.2M" color="purple" />
  <StatCard title="Total Requests" value="145,200" icon="MessageSquare" trend="+12%" color="blue" />
  <StatCard title="Success Rate" value="99.8%" icon="CheckCircle" trend="+0.1%" color="green" />
  <StatCard title="Avg Latency" value="840ms" icon="Zap" trend="-20ms" color="orange" />
</div>
    </UniversalCRUDLayout>
  );
}
