import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  User,
  Briefcase,
  CheckSquare,
  Ticket,
  BarChart3,
  Sparkles,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Leads", icon: Users, path: "/leads" },
    { name: "Customers", icon: User, path: "/customers" },
    { name: "Deals", icon: Briefcase, path: "/deals" },
    { name: "Tasks", icon: CheckSquare, path: "/tasks" },
    { name: "Tickets", icon: Ticket, path: "/tickets" },
    { name: "Reports", icon: BarChart3, path: "/reports" },
    { name: "AI Insights", icon: Sparkles, path: "/ai" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside
      className={`relative transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"} 
      min-h-screen 
      bg-gradient-to-b from-[#0F172A] to-[#0B1120]
      border-r border-white/10
      backdrop-blur-xl`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-6">
        {!collapsed && (
          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Atlas CRM
            </h1>
            <p className="text-xs text-white/50">
              AI-Ready Workspace
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white/60 hover:text-white transition"
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-3 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* AI Assistant */}
      <div className="absolute bottom-6 left-0 w-full px-4">
        <div
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
          bg-gradient-to-r from-purple-600 to-blue-600 text-white
          hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
        >
          <Sparkles size={18} />
          {!collapsed && <span>AI Assistant</span>}
        </div>
      </div>
    </aside>
  );
}