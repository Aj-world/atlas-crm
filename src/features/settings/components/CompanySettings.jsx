export default function CompanySettings() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Company Information</h2>

      <div className="grid grid-cols-2 gap-6">
        <input
          placeholder="Company Name"
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
        />
        <input
          placeholder="Website"
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white"
        />
      </div>

      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
        Update Company
      </button>
    </div>
  );
}