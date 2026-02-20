export default function NotificationSettings() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Notifications</h2>

      <div className="space-y-4">
        <label className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input type="checkbox" className="accent-purple-500" />
        </label>

        <label className="flex items-center justify-between">
          <span>SMS Notifications</span>
          <input type="checkbox" className="accent-purple-500" />
        </label>

        <label className="flex items-center justify-between">
          <span>Weekly Reports</span>
          <input type="checkbox" className="accent-purple-500" />
        </label>
      </div>
    </div>
  );
}