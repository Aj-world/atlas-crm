export default function CustomerFilters() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 flex gap-5 items-center shadow-lg">
      <input
        type="text"
        placeholder="Search customers..."
        className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />

      <select className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300">
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>VIP</option>
      </select>
    </div>
  );
}