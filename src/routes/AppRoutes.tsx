// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";

// Layouts
import WebsiteLayout from "@/layouts/WebsiteLayout";
import AuthLayout from "@/layouts/AuthLayout";
import UserLayout from "@/layouts/user/UserLayout";
import AdminLayout from "@/layouts/admin/AdminLayout";

// Auth Pages
import Login from "@/pages/auth/Login";
import CreateAccount from "@/pages/auth/CreateAccount";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";


import AdminDashboard from "@/pages/admin/Dashboard";
import SocialMedia from "@/pages/admin/SocialMedia/SocialMedia";
import Seohealth from "@/pages/admin/Seohealth/Seohealth";
import Leads from "@/pages/admin/Leads/Leads";
import AiCreations from "@/pages/admin/AiCreations/AiCreations";
import AiGenerator from "@/pages/admin/AiCreations/AiGenerator";
import Settings from "@/pages/admin/Settings/Settings";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<AuthLayout />}>
        {/* Main Pages */}
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>


      {/* ADMIN - Protected (Admin Only) */}
      <Route path="/admin" element={
        <ProtectedRoute adminOnly={true}>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="social-media" element={<SocialMedia />} />
        <Route path="seo-health" element={<Seohealth />} />
        <Route path="leads" element={<Leads />} />
        <Route path="ai-creations" element={<AiCreations />} />
        <Route path="ai-generator" element={<AiGenerator />} />
        <Route path="settings" element={<Settings />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;