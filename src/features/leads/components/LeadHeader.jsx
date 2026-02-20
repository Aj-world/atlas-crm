export default function LeadHeader() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-3xl font-bold text-white">Leads</h1>
        <p className="text-gray-400 mt-2 text-sm">
          Track, manage and convert your prospects efficiently
        </p>
      </div>

      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg hover:opacity-90 transition">
        + Add Lead
      </button>
    </div>
  );
}