import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut as LogOutIcon, Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

interface AdminHeaderProps {
  adminName?: string;
  adminEmail?: string;
  adminInitials?: string;
  adminRole?: string;
  onMenuClick?: () => void;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  initials?: string;
}

const AdminHeader = ({
  adminName = "Admin Sarah",
  adminEmail = "admin@email.com",
  adminInitials = "AS",
  adminRole = "Administrator",
  onMenuClick,
}: AdminHeaderProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const [userData, setUserData] = useState<UserData>({
    id: "",
    name: adminName,
    email: adminEmail,
    role: adminRole,
    initials: adminInitials,
  });
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }
        const response = await axios.get(`${API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.success && response.data.data) {
          const data = response.data.data;
          const nameParts = data.name?.split(" ") || ["A"];
          const initials = nameParts
            .map((part: string) => part.charAt(0).toUpperCase())
            .join("")
            .slice(0, 2);
          setUserData({
            id: data.id || data._id,
            name: data.name || adminName,
            email: data.email || adminEmail,
            role: data.role || adminRole,
            avatar: data.avatar || data.profileImage,
            initials: initials || adminInitials,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 lg:h-20 shrink-0 items-center border-b border-slate-700 bg-slate-900 px-3 lg:px-0">

      <button
        onClick={onMenuClick}
        className="mr-2 rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>


      <div className="hidden sm:flex w-[180px] lg:w-[263px] shrink-0 items-center justify-center">
        <div className="text-center font-bold tracking-tight text-white text-2xl lg:text-3xl">
          RUMAX
          <div className="-mt-1 text-[6px] font-medium">
            "Your Care, Our Commitment"
          </div>
        </div>
      </div>



      {/* Brand — hidden on very small screens */}
      {/* <div className="hidden sm:flex w-[180px] lg:w-[263px] shrink-0 items-center justify-center">
        <img
          src="/assets/images/logo.jpg"
          alt="RUMAX - Your Care, Our Commitment"
          className="h-12 lg:h-14 w-auto object-contain"
        />
      </div> */}

   
      <div className="ml-5 hidden md:flex h-[42px] w-full max-w-[672px] items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-4">
        <svg
          className="h-[18px] w-[18px] text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7"></circle>
          <path d="m20 20-3.5-3.5"></path>
        </svg>
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-[15px] text-white placeholder-slate-400 outline-none"
        />
        <span className="hidden lg:inline rounded bg-slate-700/60 px-2 py-0.5 text-[11px] text-slate-400">
          ⌘K
        </span>
      </div>


      <div className="ml-auto flex items-center gap-2 lg:gap-4 pr-1 lg:pr-8">
   
        <div className="hidden lg:flex items-center gap-1.5 text-[15px] font-medium text-white">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-700 text-[8px]">
            ⚭
          </span>
          95.5
        </div>

      
        <button className="h-9 lg:h-10 rounded-md bg-indigo-600 px-3 lg:px-5 text-[11px] lg:text-[12px] font-semibold uppercase tracking-wide text-white hover:bg-indigo-700">
          <span className="hidden lg:inline">Add Credits</span>
          <span className="lg:hidden">+</span>
        </button>

        <span className="mx-1 hidden lg:block h-8 w-px bg-slate-500"></span>

        <button
          className="relative text-slate-300 hover:text-white"
          aria-label="Notifications"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"></path>
          </svg>
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

       
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 lg:gap-3 select-none"
          >
            <div className="flex h-9 w-9 lg:h-10 lg:w-9 items-center justify-center rounded-md bg-indigo-600 text-sm font-semibold text-white">
              {loading ? "..." : userData.initials}
            </div>
            <div className="hidden lg:block leading-tight text-left">
              <div className="text-[14px] font-semibold text-white">
                {loading ? "Loading..." : userData.name}
              </div>
              <div className="text-[12px] text-slate-300">{userData.role}</div>
            </div>
            <ChevronDown
              size={14}
              className={`hidden lg:block text-slate-400 transition-transform ${isProfileOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-1rem)] bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500">{userData.email}</p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {userData.role}
                </p>
              </div>
              <div className="border-t border-gray-100 py-1">
                <button
                  onClick={async () => {
                    setIsProfileOpen(false);
                    await handleLogout();
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOutIcon className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;