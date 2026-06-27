import { useState, useEffect } from "react"
import { UniversalCRUDLayout } from "@/components/layout/UniversalCRUDLayout"

function MasterDataLayout({ title, description, columns, data }) {
  return (
    <UniversalCRUDLayout
      title={title}
      description={description}
      hasData={data.length > 0}
      table={
        <table className="w-full whitespace-nowrap text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              {columns.map(c => <th key={c.key} className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-200">{c.label}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-transparent">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                {columns.map(c => (
                  <td key={c.key} className="px-6 py-4 text-slate-500 dark:text-slate-400">
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  )
}

export function BillingOverview() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    setData([
      { metric: "Current MRR", value: `$1,200` },
      { metric: "Active Subscriptions", value: `14` }
    ])
  }, [])

  const columns = [{ key: "metric", label: "Metric", isPrimary: true }, { key: "value", label: "Value" }]
  return <MasterDataLayout title="Billing Overview" description="Summary of your billing metrics." columns={columns} data={data} />
}

export function Transactions() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([
      { id: 'tx-101', amount: '$49.00', status: 'Completed' },
      { id: 'tx-102', amount: '$199.00', status: 'Pending' }
    ])
  }, [])

  const columns = [{ key: "id", label: "Transaction ID", isPrimary: true }, { key: "amount", label: "Amount" }, { key: "status", label: "Status" }]
  return <MasterDataLayout title="Transactions" payment description="View all payment transactions." columns={columns} data={data} />
}


export function ScheduledReports() {
  const columns = [{ key: "name", label: "Report Name", isPrimary: true }, { key: "schedule", label: "Schedule" }]
  const data = [{ name: "Weekly Revenue", schedule: "Every Monday 9AM" }]
  return <MasterDataLayout title="Scheduled Reports" description="Automated report deliveries." columns={columns} data={data} />
}

export function ExportsCenter() {
  const columns = [{ key: "file", label: "File Name", isPrimary: true }, { key: "date", label: "Export Date" }, { key: "status", label: "Status" }]
  const data = [{ file: "users_export_2023.csv", date: "Today", status: "Completed" }]
  return <MasterDataLayout title="Exports Center" description="Download center for background exports." columns={columns} data={data} />
}



export function UIComponents() {
  const columns = [{ key: "component", label: "Component Name", isPrimary: true }, { key: "status", label: "Status" }]
  const data = [{ component: "Button", status: "Stable" }, { component: "Modal", status: "Beta" }]
  return <MasterDataLayout title="UI Components" description="Component library reference." columns={columns} data={data} />
}

