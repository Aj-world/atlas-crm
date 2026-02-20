import LeadHeader from "../components/LeadHeader";
import LeadFilters from "../components/LeadFilters";
import LeadTable from "../components/LeadTable";

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#0f1b3d] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <LeadHeader />
        <LeadFilters />
        <LeadTable />
      </div>
    </div>
  );
}