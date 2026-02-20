import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-darkbg">
      <Sidebar />
      <div className="flex-1 p-8">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}