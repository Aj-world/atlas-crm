import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../layouts/components/common/NotFound";
import LeadsPage from "../features/leads/pages/LeadsPage";
import CustomersPage from "../features/customers/pages/CustomersPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/leads" element={<LeadsPage />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AppRoutes;