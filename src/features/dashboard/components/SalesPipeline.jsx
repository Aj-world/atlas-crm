export default function SalesPipeline() {
  const stages = ["New", "Contacted", "Qualified", "Proposal", "Won"];

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-neon">
      <h2 className="text-xl font-bold mb-6">Sales Pipeline</h2>

      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neonPurple to-neonBlue rounded-full flex items-center justify-center mb-2">
              {index + 1}
            </div>
            <p className="text-sm">{stage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}