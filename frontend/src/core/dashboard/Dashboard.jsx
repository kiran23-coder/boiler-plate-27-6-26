import { Users, Building2, CreditCard, ActivitySquare, Database, Cpu, Send, DollarSign } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Link } from 'react-router-dom'

const revenueData = [
  { name: 'Jan', total: 1200 },
  { name: 'Feb', total: 2100 },
  { name: 'Mar', total: 1800 },
  { name: 'Apr', total: 2400 },
  { name: 'May', total: 2800 },
  { name: 'Jun', total: 3200 },
]

const userData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 600 },
  { name: 'Mar', users: 1100 },
  { name: 'Apr', users: 1500 },
  { name: 'May', users: 2100 },
  { name: 'Jun', users: 2900 },
]

export function Dashboard() {
  const stats = [
    { name: 'Total Users', value: '8,432', change: '+12%', icon: Users, link: '/users' },
    { name: 'Active Users', value: '5,210', change: '+18%', icon: ActivitySquare, link: '/users/activity' },
    { name: 'Total Companies', value: '143', change: '+5%', icon: Building2, link: '/tenants/companies' },
    { name: 'Branches', value: '312', change: '+2%', icon: Building2, link: '/tenants/branches' },
    { name: 'Revenue', value: '$45,231', change: '+24%', icon: DollarSign, link: '/billing/overview' },
    { name: 'Active Plans', value: '112', change: '+18%', icon: CreditCard, link: '/billing/plans' },
    { name: 'Storage Usage', value: '1.2 TB', change: '+32%', icon: Database, link: '/files/library' },
    { name: 'API Requests', value: '1.2M', change: '+14%', icon: Send, link: '/audit/api-logs' },
    { name: 'AI Usage (Tokens)', value: '4.5M', change: '+45%', icon: Cpu, link: '/ai/tokens' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.name} to={stat.link} className="block group">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 transition-all hover:border-primary/50 hover:shadow-md dark:hover:border-primary/50 h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{stat.name}</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className="rounded-full bg-primary/10 p-3 text-primary dark:bg-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="font-medium text-green-600 dark:text-green-400">{stat.change}</span>
                <span className="ml-2 text-slate-500 dark:text-slate-400">from last month</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Revenue Growth</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#aa3bff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#aa3bff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#aa3bff" fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">User Growth</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="users" fill="#aa3bff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

