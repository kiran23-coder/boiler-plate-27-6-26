import React from 'react';
import { UniversalCRUDLayout } from '@/components/layout/UniversalCRUDLayout';
import { Drawer } from '@/components/ui/Drawer';
import { StatCard } from '@/components/ui/StatCard';
import { MockChart } from '@/components/ui/MockChart';

export function Analytics() {
  return (
    <>
    <UniversalCRUDLayout
      title="Platform Analytics"
      description="High-level metrics and usage trends."
      hasData={false}
      emptyState={<div className="p-8 text-center text-slate-500">All analytics loaded above.</div>}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">User Growth</h3>
    <MockChart type="area" color="#3b82f6" />
  </div>
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Revenue</h3>
    <MockChart type="line" color="#10b981" />
  </div>
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Active Users</h3>
    <MockChart type="bar" color="#8b5cf6" />
  </div>
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Device Analytics</h3>
    <MockChart type="bar" color="#f59e0b" />
  </div>
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Browser Analytics</h3>
    <MockChart type="area" color="#ec4899" />
  </div>
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Country Analytics</h3>
    <MockChart type="line" color="#06b6d4" />
  </div>
</div>
    </UniversalCRUDLayout>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Add/Edit Platform Analytics">
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
