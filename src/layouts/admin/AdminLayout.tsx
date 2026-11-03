import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useAuth } from "@/context/AuthContext";

const AdminLayout = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);


  const getInitials = (name: string) => {
    if (!name) return "A";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  };

  useEffect(() => {
  
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const adminName = user?.name || "Admin Tino";

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <AdminHeader
        onMenuClick={toggleSidebar}
        adminName={adminName}
        adminEmail={user?.email || "admin@email.com"}
        adminInitials={getInitials(adminName)}
        adminRole={user?.role || "Administrator"}
      />

      <div className="flex min-h-0 flex-1">
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;