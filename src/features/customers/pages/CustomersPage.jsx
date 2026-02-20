import CustomerHeader from "../components/CustomerHeader";
import CustomerFilters from "../components/CustomerFilters";
import CustomerTable from "../components/CustomerTable";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#0f1b3d] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <CustomerHeader />
        <CustomerFilters />
        <CustomerTable />
      </div>
    </div>
  );
}