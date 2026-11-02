// pages/admin/SocialMedia.tsx
import React from "react";
import { SocialMetaIcon, Highsignicon, Tiktokicon, FilterIcon, Linecharticon, Donuticon } from "@/utils/svgicons";
const SocialMedia = () => {
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
                            Social Media Management
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
                            Welcome back! Here's what's happening today.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3"></div>
                </div>
            </div>

            {/* Platform cards */}
            <section
                id="platforms"
                className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
            >
                {/* Meta */}
                <div className="rounded-xl bg-panel p-4 sm:p-5 lg:p-6">
                    <div className="flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1877f2] to-[#0a5fe0] text-white sm:h-12 sm:w-12">
                            <SocialMetaIcon />
                        </span>
                        <span className="flex items-center gap-1 text-[12px] text-green-400 sm:text-[13px]">
                            <Highsignicon />
                            +12.3%
                        </span>
                    </div>
                    <h3 className="mt-3 text-xl font-medium sm:mt-4 sm:text-[22px]">
                        Meta
                    </h3>
                    <dl className="mt-3 space-y-2.5 text-[14px] sm:space-y-3 sm:text-[15px]">
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Followers</dt>
                            <dd>45.2K</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Engagement</dt>
                            <dd>8.4%</dd>
                        </div>
                    </dl>
                </div>

                {/* LinkedIn */}
                <div className="rounded-xl bg-panel p-4 sm:p-5 lg:p-6">
                    <div className="flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a7bbd] text-[18px] font-extrabold leading-none text-white sm:h-12 sm:w-12 sm:text-[20px]">
                            in
                        </span>
                        <span className="flex items-center gap-1 text-[12px] text-green-400 sm:text-[13px]">
                            <Highsignicon />
                            +8.7%
                        </span>
                    </div>
                    <h3 className="mt-3 text-xl font-medium sm:mt-4 sm:text-[22px]">
                        LinkedIn
                    </h3>
                    <dl className="mt-3 space-y-2.5 text-[14px] sm:space-y-3 sm:text-[15px]">
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Followers</dt>
                            <dd>28.5K</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Engagement</dt>
                            <dd>6.2%</dd>
                        </div>
                    </dl>
                </div>

                {/* TikTok */}
                <div className="rounded-xl bg-panel p-4 sm:p-5 lg:p-6">
                    <div className="flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10e5e0] text-black sm:h-12 sm:w-12">
                            <Tiktokicon />
                        </span>
                        <span className="flex items-center gap-1 text-[12px] text-green-400 sm:text-[13px]">
                            <Highsignicon />
                            +24.5%
                        </span>
                    </div>
                    <h3 className="mt-3 text-xl font-medium sm:mt-4 sm:text-[22px]">
                        TikTok
                    </h3>
                    <dl className="mt-3 space-y-2.5 text-[14px] sm:space-y-3 sm:text-[15px]">
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Followers</dt>
                            <dd>67.8K</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-slate-300">Engagement</dt>
                            <dd>12.8%</dd>
                        </div>
                    </dl>
                </div>
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
                                    <i className="h-2.5 w-2.5 rounded-full bg-blue-500 sm:h-3 sm:w-3" />
                                    Users
                                </span>
                                <span className="flex items-center gap-1.5 sm:gap-2">
                                    <i className="h-2.5 w-2.5 rounded-full bg-purple-500 sm:h-3 sm:w-3" />
                                    Sessions
                                </span>
                                <span className="flex items-center gap-1.5 sm:gap-2">
                                    <i className="h-2.5 w-2.5 rounded-full bg-pink-500 sm:h-3 sm:w-3" />
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
                                <Linecharticon />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform Breakdown */}
                <div id="breakdown-card" className="min-w-0">
                    <div className="overflow-hidden rounded-xl border border-slate-500/60 bg-panel">
                        <div className="flex items-center justify-between gap-2 bg-panelhead px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <h2 className="text-[15px] font-semibold sm:text-[16px]">
                                    Platform Breakdown
                                </h2>
                                <p className="text-[11px] text-slate-400 sm:text-[12px]">
                                    Lead progression stages
                                </p>
                            </div>
                            <button className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-line bg-ink px-2.5 text-[12px] hover:bg-panel sm:h-10 sm:gap-2 sm:px-4 sm:text-[14px]">
                                <FilterIcon />
                                Filter
                            </button>
                        </div>
                        <div className="flex flex-col items-center px-3 pb-5 pt-6 sm:px-4 sm:pb-6 sm:pt-8">
                            <div className="relative h-[200px] w-[200px] sm:h-[230px] sm:w-[230px] lg:h-[250px] lg:w-[250px]">
                                <Donuticon />
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
                                    <i className="h-2.5 w-2.5 rounded-full bg-[#9fe0c5]" />
                                    Organic
                                </li>
                                <li className="flex items-center gap-1.5 sm:gap-2">
                                    <i className="h-2.5 w-2.5 rounded-full bg-[#5fadff]" />
                                    Direct
                                </li>
                                <li className="flex items-center gap-1.5 sm:gap-2">
                                    <i className="h-2.5 w-2.5 rounded-full bg-[#9b94f5]" />
                                    Referral
                                </li>
                                <li className="flex items-center gap-1.5 sm:gap-2">
                                    <i className="h-2.5 w-2.5 rounded-full bg-[#f9d5dc]" />
                                    Social
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Posts Bar */}
            <div id="top-posts-bar">
                <section className="mt-6 rounded-md bg-panelhead px-4 py-3 sm:mt-9 sm:px-5 sm:py-4">
                    <h2 className="text-[15px] font-semibold sm:text-[16px]">Top Posts</h2>
                    <p className="mt-1 text-[11px] text-slate-400 sm:text-[12px]">
                        Monthly conversion targets
                    </p>
                </section>
            </div>

            {/* Top Posts Table */}
            <section className="mt-4 overflow-hidden rounded-xl border border-line bg-ink sm:mt-6">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left sm:min-w-[900px]">
                        <thead>
                            <tr className="border-b border-line text-[10px] uppercase tracking-wider text-slate-400 sm:text-[12px]">
                                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">Post Preview</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Platform</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Posted Date</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Engagement Rate</th>
                                <th className="px-2 py-3 font-medium sm:px-3 sm:py-5">Reach / Impressions</th>
                                <th className="px-4 py-3 font-medium sm:px-6 sm:py-5">Trend</th>
                            </tr>
                        </thead>
                        <tbody id="posts-body">
                            <tr className="text-[13px] sm:text-[15px]">
                                <td className="px-4 py-4 leading-snug sm:px-6 sm:py-5">
                                    Caring for your loved ones
                                    <br />
                                    at home ....
                                </td>
                                <td className="px-2 py-4 sm:px-3 sm:py-5">
                                    <span className="flex items-center gap-2 text-slate-400">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0a7bbd] text-[20px] font-extrabold leading-none text-white">
                                            in
                                        </span>
                                        LinkedIn
                                    </span>
                                </td>
                                <td className="px-2 py-4 leading-snug text-slate-400 sm:px-3 sm:py-5">
                                    12 Mar 2026
                                    <br />
                                    <span className="text-[11px] text-slate-500 sm:text-[12px]">
                                        2 days ago
                                    </span>
                                </td>
                                <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-5">5.2%</td>
                                <td className="px-2 py-4 text-slate-400 sm:px-3 sm:py-5">12,500</td>
                                <td className="px-4 py-4 sm:px-6 sm:py-5">
                                    <span className="inline-flex items-center gap-1 rounded bg-green-900/40 px-2 py-1 text-[11px] text-green-400 sm:text-[12px]">
                                        <Highsignicon />
                                    </span>
                                </td>
                            </tr>
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

export default SocialMedia;