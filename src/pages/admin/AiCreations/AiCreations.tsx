import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Staricon, Contenticon, Imageicon, Videoicon, FilterIcon, Clockicon } from "@/utils/svgicons";


type TabKey = "all" | "content" | "image" | "video";
type CreationKind = "content" | "image" | "video";

interface Creation {
  kind: CreationKind;
  gradient: string;
  platform: "Facebook" | "Instagram" | "LinkedIn" | "X";
  platformBg: string;
  isVideo: boolean;
  text: string;
  date: string;
  duration?: string;
}

const platformBgMap: Record<Creation["platform"], string> = {
  Facebook: "bg-blue-500",
  Instagram: "bg-gradient-to-r from-pink-500 to-purple-600",
  LinkedIn: "bg-[#0a7bbd]",
  X: "bg-black",
};

const creations: Creation[] = [
  {
    kind: "content",
    gradient: "from-slate-400 to-slate-700",
    platform: "Facebook",
    platformBg: platformBgMap.Facebook,
    isVideo: false,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
  },
  {
    kind: "content",
    gradient: "from-stone-300 to-slate-600",
    platform: "Facebook",
    platformBg: platformBgMap.Facebook,
    isVideo: false,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
  },
  {
    kind: "video",
    gradient: "from-zinc-400 to-stone-700",
    platform: "Instagram",
    platformBg: platformBgMap.Instagram,
    isVideo: true,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
    duration: "30s",
  },
  {
    kind: "image",
    gradient: "from-slate-400 to-slate-700",
    platform: "Facebook",
    platformBg: platformBgMap.Facebook,
    isVideo: false,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
  },
  {
    kind: "image",
    gradient: "from-stone-300 to-slate-600",
    platform: "Facebook",
    platformBg: platformBgMap.Facebook,
    isVideo: false,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
  },
  {
    kind: "video",
    gradient: "from-zinc-400 to-stone-700",
    platform: "Instagram",
    platformBg: platformBgMap.Instagram,
    isVideo: true,
    text: "Join our team of compassionate carers. We are looking for dedicated professionals who share our commitment to excellence...",
    date: "10 Mar 2026",
    duration: "30s",
  },
];

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "all",
    label: "All",
    icon: <Staricon />,
  },
  {
    key: "content",
    label: "Content",
    icon: <Contenticon/>,
  },
  {
    key: "image",
    label: "Images",
    icon: <Imageicon/>,
  },
  {
    key: "video",
    label: "Videos",
     icon: <Videoicon/>,
  },
];

const AiCreations = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [query, setQuery] = useState("");

  const filtered = creations.filter((c) => {
    const matchesTab = activeTab === "all" || c.kind === activeTab;
    const matchesQuery =
      query.trim() === "" ||
      c.text.toLowerCase().includes(query.toLowerCase()) ||
      c.platform.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <main
      id="page"
      className="min-w-0 flex-1 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-[28px] lg:pt-[36px]"
    >
      {/* Header with search / filters / create */}
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-medium leading-tight sm:text-[28px] lg:text-[32px]">
            Your Creations
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
            Manage and reuse your AI-generated content
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 lg:max-w-[700px] lg:justify-end">
          <div className="flex h-11 flex-1 items-center rounded-lg bg-panel px-4 sm:h-[46px] sm:px-5">
            <input
              id="q"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by text or platform..."
              className="w-full bg-transparent text-[14px] placeholder-slate-400 outline-none sm:text-[15px]"
            />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              id="btn-filters"
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md border border-line bg-panel px-3 text-[14px] hover:bg-panelhead sm:h-[46px] sm:flex-none sm:gap-2 sm:px-4 sm:text-[15px]"
            >
              <FilterIcon/>
              Filters
            </button>
            <Link
              to="/admin/ai-generator"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-brand px-3 text-[14px] font-medium hover:bg-indigo-700 sm:h-[46px] sm:flex-none sm:px-4 sm:text-[15px]"
            >
              Create New
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav
        id="tabs"
        className="mt-5 flex gap-1 overflow-x-auto border-b border-line bg-panel/40 px-2 sm:mt-6 sm:gap-2 sm:px-8"
      >
        {tabs.map((t) => {
          const active = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              aria-pressed={active}
              className={`-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-[14px] transition sm:gap-2 sm:px-5 sm:py-4 sm:text-[15px] ${
                active
                  ? "border-purple-400 text-white"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </nav>

      {/* Grid */}
      <section
        id="grid"
        className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
      >
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-xl border border-line bg-panel p-8 text-center text-sm text-slate-400 sm:text-[15px]">
            No creations found{query ? ` for "${query}"` : ""} in this tab.
          </div>
        ) : (
          filtered.map((item, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl border border-line bg-panel"
            >
              <div className="relative h-[180px] sm:h-[215px]">
                <div
                  className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${item.gradient}`}
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-medium text-white ${item.platformBg}`}
                >
                  {item.platform}
                </span>
                {item.isVideo && (
                  <>
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-800 to-purple-700 text-white sm:h-14 sm:w-14">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    {item.duration && (
                      <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-[12px]">
                        {item.duration}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="p-4">
                <p className="text-[14px] leading-relaxed text-slate-200 sm:text-[15px]">
                  {item.text}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-[12px] text-slate-400 sm:text-[13px]">
                 <Clockicon/>
                  {item.date}
                </p>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default AiCreations;