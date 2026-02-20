import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-neon p-10 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Atlas CRM
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg"
        >
          Enter Dashboard
        </button>
      </div>
    </div>
  );
}