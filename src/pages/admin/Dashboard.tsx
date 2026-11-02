// pages/admin/AdminDashboard.tsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Calendericon, Downloadicon, FilterIcon, Highsignicon } from "@/utils/svgicons";

const trafficData = [
  { month: "Jan", users: 40000, sessions: 28000, pageViews: 18000 },
  { month: "Feb", users: 48000, sessions: 34000, pageViews: 22000 },
  { month: "Mar", users: 44000, sessions: 31000, pageViews: 20000 },
  { month: "Apr", users: 62000, sessions: 44000, pageViews: 28000 },
  { month: "May", users: 56000, sessions: 40000, pageViews: 25000 },
  { month: "Jun", users: 74000, sessions: 52000, pageViews: 33000 },
  { month: "Jul", users: 82000, sessions: 58000, pageViews: 37000 },
  { month: "Aug", users: 78000, sessions: 55000, pageViews: 35000 },
  { month: "Sep", users: 92000, sessions: 65000, pageViews: 41000 },
  { month: "Oct", users: 98000, sessions: 69000, pageViews: 44000 },
  { month: "Nov", users: 95000, sessions: 67000, pageViews: 42000 },
  { month: "Dec", users: 105000, sessions: 74000, pageViews: 47000 },
];

const sourceData = [
  { name: "Referral", value: 8, color: "#9b94f5" },
  { name: "Direct", value: 10, color: "#5fadff" },
  { name: "Social", value: 32, color: "#f9d5dc" },
  { name: "Organic", value: 33, color: "#9fe0c5" },
];

const statCards = [
  {
    title: "Total Leads",
    value: "1,284",
    change: "+12.5%",
    isPositive: true,
    iconBg: "bg-blue-500",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3.5"></circle>
        <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"></path>
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2 .7 3.2 2.4 3.5 5.2"></path>
      </svg>
    ),
  },
  {
    title: "Sessions",
    value: "328",
    change: "+12.5%",
    isPositive: true,
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-purple-600",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "Bounce Rate",
    value: "47",
    change: "+12.5%",
    isPositive: false,
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="1.2"></circle>
      </svg>
    ),
  },
  {
    title: "Avg Session Duration",
    value: "89",
    change: "+12.5%",
    isPositive: true,
    iconBg: "bg-green-500",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="13.5" r="7.5"></circle>
        <path d="M12 9.5v4l2 1.5M9.5 2.5h5M12 2.5v3.5"></path>
      </svg>
    ),
  },
];

const topPages = [
  {
    url: "/products/premium-plan",
    views: "12,540",
    visitors: "6,110 Visitors",
    avgTime: "2m 45s",
    bounce: "38%",
    conversion: "4.2%",
  },
];

const AdminDashboard = () => {
  return (
    <main
      id="page"
      className="min-w-0 flex-1 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-[28px] lg:pt-[36px]"
    >
      {/* Page Head */}
      <div id="page-head">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-medium leading-tight sm:text-[28px] lg:text-[32px]">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-line bg-panel px-3 text-sm text-white transition hover:bg-panelhead sm:h-[44px] sm:px-4 sm:text-[15px]">
             <Calendericon/>
              Last 30 days
            </button>
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand px-3 text-sm font-medium text-white transition hover:bg-indigo-700 sm:h-[44px] sm:px-4 sm:text-[15px]">
           <Downloadicon/>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section
        id="stats"
        className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
      >
        {statCards.map((stat, i) => (
          <div key={i} className="rounded-xl bg-panel p-3 sm:p-4">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 ${stat.iconBg}`}
              >
                {stat.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                  {stat.title}
                </p>
                <p className="mt-0.5 text-2xl font-semibold leading-tight sm:mt-1 sm:text-[30px]">
                  {stat.value}
                </p>
              </div>
              <span
                className={`inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-[10px] sm:px-2 sm:text-[11px] ${
                  stat.isPositive
                    ? "bg-green-900/40 text-green-400"
                    : "bg-red-900/40 text-red-400"
                }`}
              >
               < Highsignicon/>
                {stat.change}
              </span>
            </div>
            <p className="mt-2 text-[12px] text-slate-500 sm:mt-3 sm:text-[13px]">
              vs last month
            </p>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-6 xl:grid-cols-[1.78fr_1fr]">
        {/* Traffic Overview */}
        <div id="traffic-card" className="min-w-0">
          <div className="overflow-hidden rounded-xl bg-panel">
            <div className="flex flex-col gap-3 bg-panelhead px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <div>
                <h2 className="text-[15px] font-semibold sm:text-[16px]">
                  Traffic Overview
                </h2>
                <p className="text-[11px] text-slate-400 sm:text-[12px]">
                  Monthly performance tracking
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-slate-300 sm:gap-4 sm:text-[14px]">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-blue-500 sm:h-3 sm:w-3"></i>
                  Users
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-purple-500 sm:h-3 sm:w-3"></i>
                  Sessions
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-pink-500 sm:h-3 sm:w-3"></i>
                  Page Views
                </span>
                <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-ink px-2.5 text-[12px] hover:bg-panel sm:h-10 sm:gap-2 sm:px-4 sm:text-[14px]">
                  <FilterIcon />
                  Filter
                </button>
              </div>
            </div>
            <div className="px-2 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-6">
              <div className="h-[240px] w-full sm:h-[280px] lg:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={trafficData}
                    margin={{ top: 5, right: 5, left: -15, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5fadff" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#5fadff" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A855F7" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EC4899" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 4" stroke="#2a3150" vertical />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10, fill: "#7b84a3" }}
                      axisLine={{ stroke: "#cbd5e1" }}
                      tickLine={false}
                      interval="preserveStartEnd"
                      minTickGap={12}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#7b84a3" }}
                      axisLine={{ stroke: "#cbd5e1" }}
                      tickLine={false}
                      tickFormatter={(v: number) => `${v / 1000}k`}
                      width={38}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111827",
                        border: "1px solid #2a3150",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                      labelStyle={{ color: "#e2e8f0" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="pageViews"
                      stroke="#EC4899"
                      strokeWidth={2}
                      fill="url(#viewsGrad)"
                      name="Page Views"
                    />
                    <Area
                      type="monotone"
                      dataKey="sessions"
                      stroke="#A855F7"
                      strokeWidth={2}
                      fill="url(#sessionsGrad)"
                      name="Sessions"
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#5fadff"
                      strokeWidth={2}
                      fill="url(#usersGrad)"
                      name="Users"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div id="sources-card" className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-slate-500/60 bg-panel">
            <div className="flex items-center justify-between gap-2 bg-panelhead px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <h2 className="text-[15px] font-semibold sm:text-[16px]">
                  Traffic Sources
                </h2>
                <p className="text-[11px] text-slate-400 sm:text-[12px]">
                  Lead progression stages
                </p>
              </div>
              <button className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-line bg-ink px-2.5 text-[12px] hover:bg-panel sm:h-10 sm:gap-2 sm:px-4 sm:text-[14px]">
                <FilterIcon/>
                Filter
              </button>
            </div>
            <div className="flex flex-col items-center px-3 pb-5 pt-6 sm:px-4 sm:pb-6 sm:pt-8">
              <div className="relative h-[200px] w-[200px] sm:h-[230px] sm:w-[230px] lg:h-[250px] lg:w-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius="52%"
                      outerRadius="80%"
                      startAngle={-105}
                      paddingAngle={0}
                      stroke="none"
                    >
                      {sourceData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute left-1/2 top-1/2 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink sm:h-[145px] sm:w-[145px] lg:h-[160px] lg:w-[160px]">
                  <span className="text-[26px] font-semibold leading-none sm:text-[30px] lg:text-[32px]">
                    500
                  </span>
                  <span className="mt-1 text-[13px] text-slate-300 sm:text-[14px] lg:text-[15px]">
                    New Leads
                  </span>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-slate-300 sm:mt-6 sm:gap-x-5 sm:text-[14px]">
                <li className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#9fe0c5]"></i>
                  Organic
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#5fadff]"></i>
                  Direct
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#9b94f5]"></i>
                  Referral
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#f9d5dc]"></i>
                  Social
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Pages Bar */}
      <div id="top-pages-bar">
        <section className="mt-6 rounded-md bg-panelhead px-4 py-3 sm:mt-9 sm:px-5 sm:py-4">
          <h2 className="text-[15px] font-semibold sm:text-[16px]">Top Pages</h2>
          <p className="mt-1 text-[11px] text-slate-400 sm:text-[12px]">
            Monthly conversion targets
          </p>
        </section>
      </div>

      {/* Top Pages Table */}
      <section className="mt-4 overflow-hidden rounded-xl border border-line bg-ink sm:mt-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left sm:min-w-[900px]">
            <thead>
              <tr className="border-b border-line text-[10px] uppercase tracking-wider text-slate-400 sm:text-[12px]">
                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">
                  Page URL / Title
                </th>
                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">
                  Page Views
                </th>
                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">
                  Unique Visitors
                </th>
                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">
                  Avg Time on Page
                </th>
                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">
                  Bounce Rate
                </th>
                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, i) => (
                <tr key={i} className="text-[13px] sm:text-[15px]">
                  <td className="px-4 py-4 sm:px-6 sm:py-6">{page.url}</td>
                  <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-6">
                    {page.views}
                  </td>
                  <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-6">
                    {page.visitors}
                  </td>
                  <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-6">
                    {page.avgTime}
                  </td>
                  <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-6">
                    {page.bounce}
                  </td>
                  <td className="px-4 py-4 text-slate-400 sm:px-6 sm:py-6">
                    {page.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pager */}
        <div id="pager">
          <div className="flex flex-col items-center gap-3 border-t border-line px-4 py-3 sm:flex-row sm:justify-between sm:px-6 sm:py-3.5">
            <span className="text-[12px] text-slate-500 sm:text-[14px]">
              1 - 2 of 40 items
            </span>
            <div className="flex w-full gap-2 sm:w-auto sm:gap-3">
              <button className="inline-flex h-9 flex-1 items-center justify-center rounded-md border border-line bg-panel px-4 text-[13px] text-white transition hover:bg-panelhead sm:h-[38px] sm:flex-none sm:text-[14px]">
                Previous
              </button>
              <button className="inline-flex h-9 flex-1 items-center justify-center rounded-md border border-line bg-panel px-4 text-[13px] text-white transition hover:bg-panelhead sm:h-[38px] sm:flex-none sm:text-[14px]">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;