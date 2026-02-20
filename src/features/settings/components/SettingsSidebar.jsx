export default function SettingsSidebar({ activeTab, setActiveTab }) {
  const menu = [
    { id: "profile", label: "Profile" },
    { id: "company", label: "Company" },
    { id: "notifications", label: "Notifications" },
  ];

  return (
    <div className="w-64 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg">
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition ${
            activeTab === item.id
              ? "bg-gradient-to-r from-purple-600 to-blue-600"
              : "hover:bg-white/5"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}