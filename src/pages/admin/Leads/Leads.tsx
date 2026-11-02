import React from "react";
import {
    Calendericon, Downloadicon, FilterIcon, Highsignicon, Contacticon, NewContacticon, Targeticon, SmallSearchsign,
    Dropdownsign, Threedotsign
} from "@/utils/svgicons";


const Leads = () => {
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
                            Leads &amp; Enquiries
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
                            Manage and track all incoming leads
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-line bg-panel px-3 text-sm text-white transition hover:bg-panelhead sm:h-[44px] sm:px-4 sm:text-[15px]">
                            <Calendericon />
                            Last 30 days
                        </button>
                        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand px-3 text-sm font-medium text-white transition hover:bg-indigo-700 sm:h-[44px] sm:px-4 sm:text-[15px]">
                            <Downloadicon />
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
                <div className="rounded-xl bg-panel p-3 sm:p-4">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 sm:h-12 sm:w-12">
                            <Contacticon />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Total Leads
                            </p>
                            <p className="mt-0.5 text-2xl font-semibold leading-tight sm:mt-1 sm:text-[30px]">
                                1,284
                            </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded bg-green-900/40 px-1.5 py-0.5 text-[10px] text-green-400 sm:px-2 sm:text-[11px]">
                            <Highsignicon />
                            +12.5%
                        </span>
                    </div>
                    <p className="mt-2 text-[12px] text-slate-500 sm:mt-3 sm:text-[13px]">
                        vs last month
                    </p>
                </div>

                <div className="rounded-xl bg-panel p-3 sm:p-4">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 sm:h-12 sm:w-12">
                            <NewContacticon />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                New Leads
                            </p>
                            <p className="mt-0.5 text-2xl font-semibold leading-tight sm:mt-1 sm:text-[30px]">
                                328
                            </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded bg-green-900/40 px-1.5 py-0.5 text-[10px] text-green-400 sm:px-2 sm:text-[11px]">
                            <Highsignicon />
                            +12.5%
                        </span>
                    </div>
                    <p className="mt-2 text-[12px] text-slate-500 sm:mt-3 sm:text-[13px]">
                        vs last month
                    </p>
                </div>

                <div className="rounded-xl bg-panel p-3 sm:p-4">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500 sm:h-12 sm:w-12">
                            <Targeticon />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Qualified
                            </p>
                            <p className="mt-0.5 text-2xl font-semibold leading-tight sm:mt-1 sm:text-[30px]">
                                47
                            </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded bg-red-900/40 px-1.5 py-0.5 text-[10px] text-red-400 sm:px-2 sm:text-[11px]">
                            <Highsignicon />
                            +12.5%
                        </span>
                    </div>
                    <p className="mt-2 text-[12px] text-slate-500 sm:mt-3 sm:text-[13px]">
                        vs last month
                    </p>
                </div>

                <div className="rounded-xl bg-panel p-3 sm:p-4">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 sm:h-12 sm:w-12">
                            <Highsignicon />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Converted
                            </p>
                            <p className="mt-0.5 text-2xl font-semibold leading-tight sm:mt-1 sm:text-[30px]">
                                89
                            </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded bg-green-900/40 px-1.5 py-0.5 text-[10px] text-green-400 sm:px-2 sm:text-[11px]">
                            <Highsignicon />
                            +12.5%
                        </span>
                    </div>
                    <p className="mt-2 text-[12px] text-slate-500 sm:mt-3 sm:text-[13px]">
                        vs last month
                    </p>
                </div>
            </section>

            {/* Search + filters */}
            <section className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                <div className="flex h-11 w-full items-center gap-3 rounded-lg bg-panel px-4 sm:h-[46px] sm:max-w-[433px]">
                    <span id="search-ic" className="shrink-0 text-slate-400">
                        <SmallSearchsign />
                    </span>
                    <input
                        type="text"
                        id="lead-search"
                        placeholder="Search by name or email..."
                        className="w-full bg-transparent text-[14px] placeholder-slate-400 outline-none sm:text-[15px]"
                    />
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="relative flex-1 sm:flex-none">
                        <select
                            id="status-filter"
                            className="h-11 w-full appearance-none rounded-md border border-line bg-panel pl-3 pr-8 text-[14px] text-slate-300 outline-none [&>option]:bg-panel sm:h-[46px] sm:w-[132px] sm:text-[15px]"
                        >
                            <option value="">All Statuses</option>
                            <option>New</option>
                            <option>Qualified</option>
                            <option>Contacted</option>
                        </select>
                        <span
                            id="status-chev"
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                        >
                            <Dropdownsign />
                        </span>
                    </div>
                    <button
                        id="more-filters"
                        className="inline-flex h-11 items-center gap-1.5 rounded-md border border-line bg-panel px-3 text-[14px] hover:bg-panelhead sm:h-[46px] sm:gap-2 sm:px-4 sm:text-[15px]"
                    >
                        <FilterIcon />
                        More Filters
                    </button>
                </div>
            </section>

            {/* Table */}
            <section className="mt-4 overflow-hidden rounded-xl border border-line bg-panel/40 sm:mt-6">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left sm:min-w-[960px]">
                        <thead>
                            <tr className="border-b border-line text-[10px] uppercase tracking-wider text-slate-400 sm:text-[12px]">
                                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">Full Name</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Town</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Email</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Lead Source</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Post Code</th>
                                <th className="px-2 py-3 text-center font-medium sm:px-3 sm:py-5">Status</th>
                                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="leads-body" className="divide-y divide-line">
                            {/* Row 1 - New */}
                            <tr className="text-[13px] sm:text-[15px]">
                                <td className="px-4 py-3 leading-snug sm:px-6 sm:py-4">
                                    <a href="lead-view.html" className="text-slate-400 hover:text-white">
                                        Sarah Johnson
                                    </a>
                                    <div className="text-[11px] text-slate-500 sm:text-[12px]">ID: #1</div>
                                </td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">Bedford</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">sarah.j@email.com</td>
                                <td className="px-2 py-3 text-slate-300 sm:px-3 sm:py-4">Contact Forms</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">BS1-BS16</td>
                                <td className="px-2 py-3 text-center sm:px-3 sm:py-4">
                                    <span className="inline-flex h-7 w-[86px] items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-[11px] font-medium text-blue-700 sm:h-8 sm:w-[98px] sm:text-[13px]">
                                        New
                                    </span>
                                </td>
                                <td className="relative px-4 py-3 sm:px-6 sm:py-4">
                                    <button
                                        className="row-menu-btn rounded p-1 text-slate-300 hover:bg-panelhead"
                                        aria-label="Actions"
                                    >
                                       <Threedotsign/>
                                    </button>
                                    <div className="row-menu absolute right-10 top-10 z-20 hidden w-44 overflow-hidden rounded-lg border border-line bg-panelhead text-[14px] shadow-xl">
                                        <a href="lead-view.html" className="block px-4 py-2.5 hover:bg-panel">
                                            View Lead
                                        </a>
                                        <button data-act="assign" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Assign Member
                                        </button>
                                        <button data-act="note" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Add Note
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 - Qualified */}
                            <tr className="text-[13px] sm:text-[15px]">
                                <td className="px-4 py-3 leading-snug sm:px-6 sm:py-4">
                                    <a href="lead-view.html" className="text-slate-400 hover:text-white">
                                        Michael Chen
                                    </a>
                                    <div className="text-[11px] text-slate-500 sm:text-[12px]">ID: #2</div>
                                </td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">Bedford</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">m.chen@email.com</td>
                                <td className="px-2 py-3 text-slate-300 sm:px-3 sm:py-4">Self-Assessment Test</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">BS1-BS16</td>
                                <td className="px-2 py-3 text-center sm:px-3 sm:py-4">
                                    <span className="inline-flex h-7 w-[86px] items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-[11px] font-medium text-emerald-700 sm:h-8 sm:w-[98px] sm:text-[13px]">
                                        Qualified
                                    </span>
                                </td>
                                <td className="relative px-4 py-3 sm:px-6 sm:py-4">
                                    <button
                                        className="row-menu-btn rounded p-1 text-slate-300 hover:bg-panelhead"
                                        aria-label="Actions"
                                    >
                                         <Threedotsign/>
                                    </button>
                                    <div className="row-menu absolute right-10 top-10 z-20 hidden w-44 overflow-hidden rounded-lg border border-line bg-panelhead text-[14px] shadow-xl">
                                        <a href="lead-view.html" className="block px-4 py-2.5 hover:bg-panel">
                                            View Lead
                                        </a>
                                        <button data-act="assign" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Assign Member
                                        </button>
                                        <button data-act="note" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Add Note
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 - Contacted */}
                            <tr className="text-[13px] sm:text-[15px]">
                                <td className="px-4 py-3 leading-snug sm:px-6 sm:py-4">
                                    <a href="lead-view.html" className="text-slate-400 hover:text-white">
                                        Emily Rodriguez
                                    </a>
                                    <div className="text-[11px] text-slate-500 sm:text-[12px]">ID: #3</div>
                                </td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">Bedford</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">emily.r@email.com</td>
                                <td className="px-2 py-3 text-slate-300 sm:px-3 sm:py-4">Funding Calculator Estimator</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">BS1-BS16</td>
                                <td className="px-2 py-3 text-center sm:px-3 sm:py-4">
                                    <span className="inline-flex h-7 w-[86px] items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-[11px] font-medium text-amber-700 sm:h-8 sm:w-[98px] sm:text-[13px]">
                                        Contacted
                                    </span>
                                </td>
                                <td className="relative px-4 py-3 sm:px-6 sm:py-4">
                                    <button
                                        className="row-menu-btn rounded p-1 text-slate-300 hover:bg-panelhead"
                                        aria-label="Actions"
                                    >
                                         <Threedotsign/>
                                    </button>
                                    <div className="row-menu absolute right-10 top-10 z-20 hidden w-44 overflow-hidden rounded-lg border border-line bg-panelhead text-[14px] shadow-xl">
                                        <a href="lead-view.html" className="block px-4 py-2.5 hover:bg-panel">
                                            View Lead
                                        </a>
                                        <button data-act="assign" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Assign Member
                                        </button>
                                        <button data-act="note" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Add Note
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 4 - New */}
                            <tr className="text-[13px] sm:text-[15px]">
                                <td className="px-4 py-3 leading-snug sm:px-6 sm:py-4">
                                    <a href="lead-view.html" className="text-slate-400 hover:text-white">
                                        David Kim
                                    </a>
                                    <div className="text-[11px] text-slate-500 sm:text-[12px]">ID: #4</div>
                                </td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">Bedford</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">d.kim@email.com</td>
                                <td className="px-2 py-3 text-slate-300 sm:px-3 sm:py-4">Clinical Trial Book Downloads</td>
                                <td className="px-2 py-3 text-slate-500 sm:px-3 sm:py-4">BS1-BS16</td>
                                <td className="px-2 py-3 text-center sm:px-3 sm:py-4">
                                    <span className="inline-flex h-7 w-[86px] items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-[11px] font-medium text-blue-700 sm:h-8 sm:w-[98px] sm:text-[13px]">
                                        New
                                    </span>
                                </td>
                                <td className="relative px-4 py-3 sm:px-6 sm:py-4">
                                    <button
                                        className="row-menu-btn rounded p-1 text-slate-300 hover:bg-panelhead"
                                        aria-label="Actions"
                                    >
                                         <Threedotsign/>
                                    </button>
                                    <div className="row-menu absolute right-10 top-10 z-20 hidden w-44 overflow-hidden rounded-lg border border-line bg-panelhead text-[14px] shadow-xl">
                                        <a href="lead-view.html" className="block px-4 py-2.5 hover:bg-panel">
                                            View Lead
                                        </a>
                                        <button data-act="assign" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Assign Member
                                        </button>
                                        <button data-act="note" className="block w-full px-4 py-2.5 text-left hover:bg-panel">
                                            Add Note
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pager */}
                <div id="pager">
                    <div className="flex flex-col items-center gap-3 border-t border-line px-4 py-3 sm:flex-row sm:justify-between sm:px-6 sm:py-3.5">
                        <span className="text-[12px] text-slate-500 sm:text-[14px]">
                            1 - 8 of 40 items
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

export default Leads;