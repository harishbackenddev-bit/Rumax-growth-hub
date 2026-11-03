import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  {
    title: "Website Analytics",
    path: "/admin",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Social Media",
    path: "/admin/social-media",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2 .7 3.2 2.4 3.5 5.2" />
      </svg>
    ),
  },
  {
    title: "SEO & Health",
    path: "/admin/seo-health",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
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
    title: "Leads & Enquiries",
    path: "/admin/leads",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h12a2 2 0 0 1 2 2v6M4 4v14a2 2 0 0 0 2 2h6" />
        <path d="M8 9h6M8 13h3M18 15v6M15 18h6" />
      </svg>
    ),
  },
  {
    title: "AI Content Generator",
    path: "/admin/ai-creations",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 4v3M8.5 5.5h3M5 12v4M3 14h4M16 8l1.2 3.3L20.5 12.5l-3.3 1.2L16 17l-1.2-3.3-3.3-1.2 3.3-1.2L16 8Z" />
      </svg>
    ),
  },
  {
    title: "Settings & Integrations",
    path: "/admin/settings",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M9 7v13M15 7v13" />
      </svg>
    ),
  },
];

const SidebarInner = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();
const isActive = (p: string) => {
  if (p === "/admin") {
    return location.pathname === "/admin";
  }

  if (p === "/admin/ai-creations") {
    return (
      location.pathname.startsWith("/admin/ai-creations") ||
      location.pathname.startsWith("/admin/ai-generator")
    );
  }

  return (
    location.pathname === p ||
    location.pathname.startsWith(p + "/")
  );
};

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("candidateId");
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-1 flex-col min-h-0">
      <nav className="px-4 pt-6 overflow-y-auto">
        <ul className="space-y-3 text-[15px]">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onNavigate}
                  className={`flex h-[46px] items-center gap-3 rounded-md px-3.5 transition ${
                    active
                      ? "bg-indigo-600 font-medium text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="flex shrink-0 items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-4 mt-9 rounded-xl border border-indigo-500/60 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
          </svg>
        </div>
        <p className="mt-4 text-[16px] font-medium">Need Help?</p>
        <Link to="/admin/help" onClick={onNavigate}>
          <button className="mt-3 h-10 w-full rounded-md bg-indigo-600 text-[15px] font-medium hover:bg-indigo-700">
            Support
          </button>
        </Link>
      </div>

      <div className="mt-auto border-t border-line" />
      <button
        onClick={handleSignOut}
        className="flex h-[66px] items-center gap-3 px-[30px] text-[15px] text-red-500 hover:text-red-400"
      >
        <svg
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="m16 17 5-5-5-5M21 12H9" />
        </svg>
        Sign Out
      </button>
      <div className="border-t border-line" />
    </div>
  );
};

const AdminSidebar = ({ isOpen = false, onClose }: AdminSidebarProps) => {
  return (
    <>
      <aside className="hidden lg:flex w-[240px] xl:w-[258px] shrink-0 flex-col self-stretch border-r border-line bg-slate-900 text-white">
        <SidebarInner />
      </aside>


      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 flex w-[280px] max-w-[85vw] flex-col bg-slate-900 text-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-4">
            <div className="text-center font-bold tracking-tight text-white text-2xl">
              RUMAX
              <div className="-mt-1 text-[6px] font-medium">
                "Your Care, Our Commitment"
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-slate-300" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col min-h-0">
            <SidebarInner onNavigate={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;