import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", leads: 120, deals: 40 },
  { month: "Feb", leads: 200, deals: 65 },
  { month: "Mar", leads: 150, deals: 55 },
  { month: "Apr", leads: 280, deals: 90 },
  { month: "May", leads: 320, deals: 120 },
  { month: "Jun", leads: 400, deals: 150 },
];

export default function LeadsDealsChart() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Leads & Deals Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#7C3AED"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="deals"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}