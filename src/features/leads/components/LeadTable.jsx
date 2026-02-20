import { dummyLeads } from "../data/dummyLeads";

const getStatusStyle = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-500/20 text-blue-400";
    case "Contacted":
      return "bg-yellow-500/20 text-yellow-400";
    case "Qualified":
      return "bg-green-500/20 text-green-400";
    default:
      return "bg-gray-500/20 text-gray-300";
  }
};

export default function LeadTable() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="text-gray-400 text-sm border-b border-white/10">
          <tr>
            <th className="px-8 py-4 text-left">Lead</th>
            <th className="px-8 py-4 text-left">Contact</th>
            <th className="px-8 py-4 text-left">Source</th>
            <th className="px-8 py-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {dummyLeads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-semibold">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {lead.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {lead.email}
                  </p>
                </div>
              </td>

              <td className="px-8 py-5 text-gray-300">
                {lead.phone}
              </td>

              <td className="px-8 py-5 text-gray-300">
                {lead.source}
              </td>

              <td className="px-8 py-5">
                <span
                  className={`px-4 py-1.5 text-xs font-medium rounded-full ${getStatusStyle(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}