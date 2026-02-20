import KPISection from "../components/KPISection";
import AIInsightCard from "../components/AIInsightCard";
import SalesPipeline from "../components/SalesPipeline";
import TasksPanel from "../components/TasksPanel";
import LeadsDealsChart from "../components/LeadsDealsChart";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400">Welcome back, Admin</p>
      </div>

      <KPISection />
      <AIInsightCard />

      <div className="grid grid-cols-2 gap-6">
        <SalesPipeline />
        <TasksPanel />
      </div>

      <LeadsDealsChart />
    </div>
  );
}