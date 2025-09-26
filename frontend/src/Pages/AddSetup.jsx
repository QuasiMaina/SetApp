// src/pages/AddSetup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AddSetup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "camera", // default
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const categoryToEndpoint = {
    camera: "camera",
    lighting: "lighting",
    grip: "grips",
    first_ac: "firstac",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Saving setup...");

    try {
      const endpoint = categoryToEndpoint[form.category];
      if (!endpoint) {
        setMessage("❌ Invalid category selected.");
        setLoading(false);
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setMessage("❌ Error: " + JSON.stringify(error));
        setLoading(false);
        return;
      }

      setMessage("✅ Setup saved successfully!");
      setTimeout(() => navigate("/setups"), 1200);
    } catch (err) {
      setMessage("❌ Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background cinematic glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      
      {/* Make Navbar absolute so it sits on top of background */}
      <Navbar />

      {/* Content wrapper with proper padding */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8">
          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center">
            ➕ Add a New Setup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <input
                type="text"
                name="title"
                placeholder="Setup Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 
                           focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none 
                           text-white placeholder-gray-400 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                placeholder="Setup Description"
                value={form.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 
                           focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none 
                           text-white placeholder-gray-400 transition-all resize-vertical"
              />
            </div>

            {/* Category */}
            <div>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 
                           focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none 
                           text-white transition-all"
              >
                <option value="camera">🎥 Camera</option>
                <option value="lighting">💡 Lighting</option>
                <option value="grip">🔧 Grip</option>
                <option value="first_ac">📏 First AC</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 font-bold rounded-lg shadow-lg transition-all ${
                loading
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-red-500 hover:scale-105 text-black"
              }`}
            >
              {loading ? "⏳ Saving..." : "💾 Save Setup"}
            </button>
          </form>

          {message && (
            <p className={`mt-6 text-center font-medium text-lg ${
              message.includes("❌") ? "text-red-400" : "text-green-400"
            }`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddSetup;