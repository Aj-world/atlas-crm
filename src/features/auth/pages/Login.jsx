import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900">

      {/* Glow Effect Background */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full -top-10 -left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-600 opacity-30 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Login Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-neon p-10 rounded-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          Atlas CRM
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-neonBlue focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-neonPurple focus:outline-none"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-gradient-to-r from-neonPurple to-neonBlue p-3 rounded-lg font-semibold shadow-neon hover:opacity-90 transition"
        >
          Sign In
        </button>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account? Register
        </p>

      </div>
    </div>
  );
}