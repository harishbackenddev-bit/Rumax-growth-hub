import React from "react";
import { Searchsign, Domainrating, Highratingsign, Highsignicon, Copyicon, FilterIcon, Kwchart } from "@/utils/svgicons";

const Seohealth = () => {
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
                            SEO &amp; Health
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
                            Monitor SEO performance and website health metrics
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3"></div>
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
                            <Domainrating />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Domain Rating
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
                            <Copyicon />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Backlinks
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
                            <Highratingsign />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Organic Traffic
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
                            <Searchsign />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] leading-snug text-slate-400 sm:text-[14px]">
                                Keyword Rankings
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

            {/* Keyword Ranking Trends */}
            <section className="mt-6 overflow-hidden rounded-xl border border-line bg-panel sm:mt-9">
                <div className="flex flex-col gap-3 bg-panelhead px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                    <div className="min-w-0">
                        <h2 className="text-[15px] font-semibold sm:text-[16px]">
                            Keyword Ranking Trends
                        </h2>
                        <p className="text-[11px] text-slate-400 sm:text-[12px]">
                            Average keyword position over time (lower is better)
                        </p>
                    </div>
                    <div id="kw-filter" className="shrink-0">
                        <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-ink px-2.5 text-[12px] hover:bg-panel sm:h-10 sm:gap-2 sm:px-4 sm:text-[14px]">
                            <FilterIcon />
                            Filter
                        </button>
                    </div>
                </div>
                <div className="px-2 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-6">
                    <div className="h-[240px] w-full sm:h-[280px] lg:h-[320px]">
                        <Kwchart />
                    </div>
                </div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-6 lg:grid-cols-2">
                {/* Top Backlinks */}
                <div className="rounded-xl bg-panel p-4 sm:p-5 lg:p-6">
                    <h2 className="text-xl font-medium sm:text-[22px]">Top Backlinks</h2>
                    <ul id="backlinks" className="mt-4 space-y-3 sm:mt-5">
                        <li className="flex items-center justify-between rounded-lg bg-ink/60 px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <div className="text-[14px] sm:text-[15px]">techcrunch.com</div>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-1.5 sm:text-[12px]">
                                    DA: 95
                                    <span className="rounded bg-green-900/50 px-2 py-0.5 text-green-400">
                                        Dofollow
                                    </span>
                                </div>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-slate-300 sm:gap-2 sm:text-[13px]">
                                <i className="h-2 w-2 rounded-full bg-green-500" />
                                Active
                            </span>
                        </li>
                        <li className="flex items-center justify-between rounded-lg bg-ink/60 px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <div className="text-[14px] sm:text-[15px]">forbes.com</div>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-1.5 sm:text-[12px]">
                                    DA: 94
                                    <span className="rounded bg-green-900/50 px-2 py-0.5 text-green-400">
                                        Dofollow
                                    </span>
                                </div>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-slate-300 sm:gap-2 sm:text-[13px]">
                                <i className="h-2 w-2 rounded-full bg-green-500" />
                                Active
                            </span>
                        </li>
                        <li className="flex items-center justify-between rounded-lg bg-ink/60 px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <div className="text-[14px] sm:text-[15px]">medium.com</div>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-1.5 sm:text-[12px]">
                                    DA: 87
                                    <span className="rounded bg-green-900/50 px-2 py-0.5 text-green-400">
                                        Dofollow
                                    </span>
                                </div>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-slate-300 sm:gap-2 sm:text-[13px]">
                                <i className="h-2 w-2 rounded-full bg-green-500" />
                                Active
                            </span>
                        </li>
                        <li className="flex items-center justify-between rounded-lg bg-ink/60 px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <div className="text-[14px] sm:text-[15px]">producthunt.com</div>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-1.5 sm:text-[12px]">
                                    DA: 82
                                    <span className="rounded bg-green-900/50 px-2 py-0.5 text-green-400">
                                        Dofollow
                                    </span>
                                </div>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-slate-300 sm:gap-2 sm:text-[13px]">
                                <i className="h-2 w-2 rounded-full bg-green-500" />
                                Active
                            </span>
                        </li>
                        <li className="flex items-center justify-between rounded-lg bg-ink/60 px-4 py-3 sm:px-5 sm:py-4">
                            <div className="min-w-0">
                                <div className="text-[14px] sm:text-[15px]">reddit.com</div>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-1.5 sm:text-[12px]">
                                    DA: 91
                                    <span className="rounded bg-slate-700/50 px-2 py-0.5 text-slate-300">
                                        Nofollow
                                    </span>
                                </div>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-slate-300 sm:gap-2 sm:text-[13px]">
                                <i className="h-2 w-2 rounded-full bg-green-500" />
                                Active
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Core Web Vitals */}
                <div className="rounded-xl bg-panel p-4 sm:p-5 lg:p-6">
                    <h2 className="text-xl font-medium sm:text-[22px]">
                        Website Health &amp; Core Web Vitals
                    </h2>
                    <ul id="vitals" className="mt-4 space-y-3">
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Performance</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    92
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-panelhead">
                                <div className="h-full rounded-full bg-green-500" style={{ width: "92%" }} />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Accessibility</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    88
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-panelhead">
                                <div className="h-full rounded-full bg-green-500" style={{ width: "88%" }} />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Best Practices</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    95
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-panelhead">
                                <div className="h-full rounded-full bg-green-500" style={{ width: "95%" }} />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>SEO</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    100
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-panelhead">
                                <div className="h-full rounded-full bg-green-500" style={{ width: "100%" }} />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>First Contentful Paint</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    1.2s
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Largest Contentful Paint</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    2.1s
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Cumulative Layout Shift</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    0.05
                                    <span className="rounded border border-green-700 bg-green-900/30 px-1.5 py-0.5 text-[11px] text-green-400 sm:px-2 sm:text-[12px]">
                                        Good
                                    </span>
                                </span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-panelhead">
                                <div className="h-full rounded-full bg-green-500" style={{ width: "1%" }} />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between gap-2 text-[14px] sm:text-[15px]">
                                <span>Time to Interactive</span>
                                <span className="flex items-center gap-2 sm:gap-3">
                                    2.8s
                                    <span className="rounded border border-yellow-700 bg-yellow-900/30 px-1.5 py-0.5 text-[11px] text-yellow-400 sm:px-2 sm:text-[12px]">
                                        Needs Improvement
                                    </span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Seohealth;