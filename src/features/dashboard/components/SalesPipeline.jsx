export default function SalesPipeline() {
  const stages = ["New", "Contacted", "Qualified", "Proposal", "Won"];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Sales Pipeline</h2>

      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div key={index} className="text-center">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-2">
              {index + 1}
            </div>
            <p className="text-sm">{stage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}