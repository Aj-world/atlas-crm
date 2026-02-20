import KPISection from "../components/KPISection";
import AIInsightCard from "../components/AIInsightCard";
import SalesPipeline from "../components/SalesPipeline";
import TasksPanel from "../components/TasksPanel";

export default function Dashboard() {
  return (
    <div>
      <KPISection />
      <AIInsightCard />
      <div className="grid grid-cols-2 gap-6">
        <SalesPipeline />
        <TasksPanel />
      </div>
    </div>
  );
}