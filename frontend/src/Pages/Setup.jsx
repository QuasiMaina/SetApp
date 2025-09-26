import { useState, useEffect } from "react";

export default function Setup() {
  const [setups, setSetups] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", category: "camera" });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("access");

  // Load setups
  useEffect(() => {
    if (token) {
      fetch("http://127.0.0.1:8000/api/setups/", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setSetups(data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Saving setup...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/setups/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const error = await response.json();
        setMessage("Error: " + JSON.stringify(error));
        return;
      }

      const newSetup = await response.json();
      setSetups([...setups, newSetup]);
      setForm({ title: "", description: "", category: "camera" });
      setMessage("✅ Setup saved!");
    } catch (err) {
      setMessage("❌ Network error: " + err.message);
    }
  };

  // Helper for category colors
  const categoryColors = {
    camera: "bg-blue-500 text-white",
    lighting: "bg-yellow-500 text-black",
    grip: "bg-green-500 text-white",
    first_ac: "bg-purple-600 text-white",
  };

  return (
    <div className="min-h-screen py-18 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8">
      <h2 className="text-3xl font-extrabold mb-6 text-center">🎬 My Setups</h2>

      {/* Add Setup Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-10 max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-yellow-700"
      >
        <h3 className="text-xl font-bold mb-4 text-yellow-400">➕ Add a New Setup</h3>
        <input
          type="text"
          name="title"
          placeholder="Setup Title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg text-white"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg text-white"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg text-white"
        >
          <option value="camera">Camera</option>
          <option value="lighting">Lighting</option>
          <option value="grip">Grip</option>
          <option value="first_ac">First AC</option>
        </select>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg shadow hover:scale-105 transition-transform"
        >
          Save Setup
        </button>
      </form>

      {message && (
        <p className="mb-6 text-center text-yellow-400 font-medium">{message}</p>
      )}

      {/* Display Setups */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {setups.map((s) => (
          <div
            key={s.id}
            className="p-5 rounded-xl shadow-lg bg-gray-900 border border-gray-700 hover:border-yellow-500 transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <span
                className={`px-3 py-1 text-sm rounded-full ${categoryColors[s.category] || "bg-gray-600 text-white"}`}
              >
                {s.category.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-300">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
