import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout() {
  return (
<div className="flex min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] 
                      bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] 
                      bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10 transition-all duration-300">

        {/* Topbar */}
        <div className="px-10 pt-8">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="px-10 pb-10 flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
}