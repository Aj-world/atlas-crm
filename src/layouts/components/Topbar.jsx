export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400">Welcome back, Admin</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-black/40 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none"
        />

        <div className="w-10 h-10 bg-gradient-to-r from-neonPurple to-neonBlue rounded-full"></div>
      </div>
    </div>
  );
}