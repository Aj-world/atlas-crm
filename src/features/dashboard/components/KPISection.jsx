function Card({ title, value, change }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-neon">
      <h3 className="text-gray-400 mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-green-400 mt-2">{change}</p>
    </div>
  );
}

export default function KPISection() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <Card title="Total Leads" value="1,542" change="+15% this week" />
      <Card title="Active Deals" value="128" change="+5% this week" />
      <Card title="Revenue" value="$24,800" change="+21% this week" />
    </div>
  );
}