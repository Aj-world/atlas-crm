import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black/40 backdrop-blur-xl p-6 border-r border-white/10">
      <h2 className="text-xl font-bold mb-6">Atlas CRM</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
      </nav>
    </div>
  );
}