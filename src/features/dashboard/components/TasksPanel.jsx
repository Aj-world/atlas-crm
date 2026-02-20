export default function TasksPanel() {
  const tasks = [
    "Follow up with ABC Corp",
    "Send proposal to XYZ Ltd",
    "Schedule demo meeting",
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Today's Tasks</h2>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="bg-black/40 p-3 rounded-lg">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}