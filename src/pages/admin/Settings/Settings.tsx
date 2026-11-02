// pages/admin/Settings.tsx
import React, { useState } from "react";

/* ---------- Tab key type ---------- */
type TabKey = "profile" | "security" | "notifications" | "integrations";

/* ---------- Reusable Toggle ---------- */
interface ToggleProps {
  defaultChecked?: boolean;
  onChange?: (v: boolean) => void;
}
const Toggle = ({ defaultChecked = false, onChange }: ToggleProps) => {
  const [on, setOn] = useState(defaultChecked);
  return (
    <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={on}
        onChange={(e) => {
          setOn(e.target.checked);
          onChange?.(e.target.checked);
        }}
      />
      <span className="absolute inset-0 rounded-full bg-panelhead transition peer-checked:bg-brand" />
      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
    </label>
  );
};

/* ---------- Profile tab ---------- */
const ProfileTab = () => (
  <div className="space-y-4 sm:space-y-5">
    <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white sm:h-12 sm:w-12" />
        <h2 className="text-xl font-medium sm:text-[26px]">Rumax Ltd.</h2>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <div>
          <dt className="text-[13px] text-slate-500 sm:text-[16px]">Company Name</dt>
          <dd className="mt-1.5 text-[14px] text-slate-400 sm:mt-3 sm:text-[16px]">Rumax Ltd.</dd>
        </div>
        <div>
          <dt className="text-[13px] text-slate-500 sm:text-[16px]">Company Email</dt>
          <dd className="mt-1.5 break-words text-[14px] text-slate-400 sm:mt-3 sm:text-[16px]">
            admin@ru-max.co.uk
          </dd>
        </div>
        <div>
          <dt className="text-[13px] text-slate-500 sm:text-[16px]">Company Phone</dt>
          <dd className="mt-1.5 text-[14px] text-slate-400 sm:mt-3 sm:text-[16px]">
            +1 (555) 000-0000
          </dd>
        </div>
        <div>
          <dt className="text-[13px] text-slate-500 sm:text-[16px]">Company Website</dt>
          <dd className="mt-1.5 break-words text-[14px] text-slate-400 sm:mt-3 sm:text-[16px]">
            www.rumax.com
          </dd>
        </div>
      </dl>
    </section>

    <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
      <h2 className="text-lg font-medium sm:text-[22px]">Regional Settings</h2>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[14px] text-indigo-300/70 sm:text-[16px]">Timezone</p>
          <p className="text-[12px] text-slate-400 sm:text-[14px]">GMT (London)</p>
        </div>
        <button className="h-9 shrink-0 rounded-md bg-panelhead px-3 text-[13px] text-slate-200 hover:bg-line sm:h-10 sm:px-4 sm:text-[14px]">
          Change
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[14px] text-indigo-300/70 sm:text-[16px]">Date Format</p>
          <p className="text-[12px] text-slate-400 sm:text-[14px]">MM/DD/YYYY</p>
        </div>
        <button className="h-9 shrink-0 rounded-md bg-panelhead px-3 text-[13px] text-slate-200 hover:bg-line sm:h-10 sm:px-4 sm:text-[14px]">
          Change
        </button>
      </div>
    </section>
  </div>
);

/* ---------- Security tab ---------- */
const SecurityTab = () => (
  <div className="space-y-4 sm:space-y-5">
    <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
      <h2 className="text-lg font-medium sm:text-[22px]">Change Password</h2>
      <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 lg:grid-cols-3">
        <div>
          <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
            Current Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="h-11 w-full rounded-md border border-line bg-panelhead/50 px-3 text-[14px] text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 sm:text-[15px]"
          />
        </div>
        <div>
          <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="h-11 w-full rounded-md border border-line bg-panelhead/50 px-3 text-[14px] text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 sm:text-[15px]"
          />
        </div>
        <div>
          <label className="mb-2 block text-[13px] text-slate-200 sm:text-[14px]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="h-11 w-full rounded-md border border-line bg-panelhead/50 px-3 text-[14px] text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 sm:text-[15px]"
          />
        </div>
      </div>
      <button className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand px-4 text-sm font-medium text-white transition hover:bg-indigo-700 sm:mt-5 sm:h-[44px] sm:text-[15px]">
        Update Password
      </button>
    </section>

    <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-medium sm:text-[22px]">
            Two-Factor Authentication
          </h2>
          <p className="mt-1 text-[12px] text-slate-400 sm:text-[14px]">
            Add an extra layer of security to your account
          </p>
        </div>
        <Toggle />
      </div>
    </section>
  </div>
);

/* ---------- Notifications tab ---------- */
const notificationItems = [
  {
    title: "New Lead Notifications",
    desc: "Receive emails when new leads arrive",
    defaultChecked: true,
  },
  {
    title: "Applicant Updates",
    desc: "Get notified about applicant status changes",
    defaultChecked: true,
  },
  {
    title: "Task Reminders",
    desc: "Receive reminders for upcoming tasks",
    defaultChecked: false,
  },
  {
    title: "Daily Summary",
    desc: "Get a daily email summary of activities",
    defaultChecked: true,
  },
];

const NotificationsTab = () => (
  <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
    <h2 className="text-xl font-medium sm:text-[26px]">Email Notifications</h2>
    <ul className="mt-4 space-y-4 sm:space-y-5">
      {notificationItems.map((n) => (
        <li key={n.title} className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] text-indigo-300/70 sm:text-[14px]">
              {n.title}
            </p>
            <p className="text-[12px] text-slate-300 sm:text-[14px]">{n.desc}</p>
          </div>
          <Toggle defaultChecked={n.defaultChecked} />
        </li>
      ))}
    </ul>
  </section>
);

/* ---------- Integrations tab ---------- */
type Integration = {
  name: string;
  icon: React.ReactNode;
  connected: boolean;
};

const integrations: Integration[] = [
  {
    name: "Facebook / Meta",
    connected: true,
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1877f2] to-[#0a5fe0] text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-[60%] w-[60%]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        >
          <path d="M12 12c-1.6-2.8-3-5-5.2-5C4.7 7 3 9.2 3 12s1.7 5 3.8 5c2.2 0 3.6-2.2 5.2-5Zm0 0c1.6 2.8 3 5 5.2 5 2.1 0 3.8-2.2 3.8-5s-1.7-5-3.8-5C15 7 13.6 9.2 12 12Z" />
        </svg>
      </span>
    ),
  },
  {
    name: "LinkedIn",
    connected: true,
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a7bbd] text-[20px] font-extrabold leading-none text-white">
        in
      </span>
    ),
  },
  {
    name: "Instagram",
    connected: false,
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f9a03f] via-[#e1306c] to-[#7a3fd0] text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-[55%] w-[55%]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      </span>
    ),
  },
  {
    name: "X / Twitter",
    connected: false,
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-[50%] w-[50%]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M4 4l16 16M20 4 4 20" />
        </svg>
      </span>
    ),
  },
  {
    name: "TikTok",
    connected: true,
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10e5e0] text-black">
        <svg
          viewBox="0 0 24 24"
          className="h-[55%] w-[55%]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.3 2.4 1.8 3.8 4.5 4" />
        </svg>
      </span>
    ),
  },
];

const IntegrationsTab = () => (
  <section className="rounded-2xl border border-line bg-panel/60 p-4 sm:p-6">
    <h2 className="text-lg font-medium sm:text-[22px]">Connected Services</h2>
    <ul className="mt-4 divide-y divide-line">
      {integrations.map((item) => (
        <li
          key={item.name}
          className="flex flex-wrap items-center justify-between gap-3 py-4"
        >
          <span className="flex items-center gap-3">
            {item.icon}
            <span className="text-[14px] sm:text-[16px]">{item.name}</span>
          </span>
          {item.connected ? (
            <span className="flex items-center gap-2 text-[13px] text-green-400 sm:text-[14px]">
              <i className="h-2 w-2 rounded-full bg-green-500" />
              Connected
            </span>
          ) : (
            <button className="h-9 rounded-md bg-brand px-3 text-[13px] font-medium hover:bg-indigo-700 sm:h-10 sm:px-4 sm:text-[14px]">
              Connect
            </button>
          )}
        </li>
      ))}
    </ul>
  </section>
);

/* ---------- Tab definitions ---------- */
const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "profile",
    label: "Profile",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-3.7 3.4-5.5 7-5.5s6.3 1.8 7 5.5" />
      </svg>
    ),
  },
  {
    key: "security",
    label: "Security",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3 5 6v6c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-3Z" />
      </svg>
    ),
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    key: "integrations",
    label: "Integrations",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
];

/* ---------- Page ---------- */
const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("profile");

  return (
    <main
      id="page"
      className="min-w-0 flex-1 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-[28px] lg:pt-[36px]"
    >
      <div id="page-head">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-medium leading-tight sm:text-[28px] lg:text-[32px]">
              Settings &amp; Integrations
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[16px]">
              Manage your account and connected services
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3" />
        </div>
      </div>

      {/* Tabs */}
      <nav
        id="tabs"
        className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-4 lg:grid-cols-4"
      >
        {tabs.map((t) => {
          const active = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              aria-pressed={active}
              className={`flex h-10 items-center justify-center gap-1.5 rounded-lg px-2 text-[13px] transition sm:h-[44px] sm:gap-2 sm:text-[15px] ${
                active
                  ? "bg-brand text-white"
                  : "bg-panelhead/60 text-slate-400 hover:text-white"
              }`}
            >
              {t.icon}
              <span className="truncate">{t.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Tab body */}
      <div id="tab-body" className="mt-5 sm:mt-6">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "notifications" && <NotificationsTab />}
        {activeTab === "integrations" && <IntegrationsTab />}
      </div>
    </main>
  );
};

export default Settings;