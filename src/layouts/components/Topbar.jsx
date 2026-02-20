export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg w-80 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
          🔔
        </div>

        <div className="w-9 h-9 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
      </div>
    </div>
  );
}