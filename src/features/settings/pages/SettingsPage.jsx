import { useState } from "react";
import SettingsSidebar from "../components/SettingsSidebar";
import ProfileSettings from "../components/ProfileSettings";
import CompanySettings from "../components/CompanySettings";
import NotificationSettings from "../components/NotificationSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "company":
        return <CompanySettings />;
      case "notifications":
        return <NotificationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#0f1b3d] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="flex gap-8">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}