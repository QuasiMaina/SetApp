import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "dop",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Signing up...");

    try {
      // Register
      const registerRes = await fetch("http://127.0.0.1:8000/api/users/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        // Show field errors
        const errors = Object.entries(registerData)
          .map(([field, msgs]) => `${field}: ${msgs}`)
          .join("\n");
        setMessage("❌ Registration failed:\n" + errors);
        return;
      }

      setMessage("✅ Account created! Logging in...");

      // Auto-login
      const loginRes = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.username, password: form.password }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok || !loginData.access) {
        setMessage("⚠️ Registration succeeded but login failed.");
        return;
      }

      // Store token under "token" (unified key)
      localStorage.setItem("token", loginData.access);

      setMessage("✅ Auto-login successful! Redirecting...");

      setTimeout(() => {
        const redirectPath = location.state?.from || "/profile";
        navigate(redirectPath, { replace: true });
      }, 1000);
    } catch (err) {
      setMessage("❌ Network error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">
      <div className="bg-blue-500 rounded-xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Sign Up</h2>

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
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
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

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-black focus:ring-2 focus:ring-yellow-400"
          >
            <option value="dop">Director of Photography</option>
            <option value="gaffer">Gaffer</option>
            <option value="first_ac">1st AC</option>
            <option value="grip">Grip</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Create Account
          </button>
        </form>

        {message && <p className="mt-4 text-center text-white whitespace-pre-line">{message}</p>}
      </div>
    </div>
  );
}
