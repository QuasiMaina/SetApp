import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 🚀 Auto-redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.access) {
        setMessage("❌ Login failed: " + (data.detail || JSON.stringify(data)));
        return;
      }

      // Save token
      localStorage.setItem("token", data.access);

      setMessage("✅ Login successful! Redirecting...");

      // Always redirect to profile after login
      setTimeout(() => {
        navigate("/profile", { replace: true });
      }, 1000);
    } catch (err) {
      setMessage("❌ Network error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">
      <div className="bg-blue-500 rounded-xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>

        {message && <p className="mt-4 text-center text-white whitespace-pre-line">{message}</p>}
      </div>
    </div>
  );
}
