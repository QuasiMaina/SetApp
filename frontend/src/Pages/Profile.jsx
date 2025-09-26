// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // don't repeatedly push same route
      if (window.location.pathname !== "/login") navigate("/login");
      return;
    }

    const ac = new AbortController();

    async function loadAll() {
      try {
        // fetch user profile
        const userRes = await fetch("http://127.0.0.1:8000/api/users/profile/", {
          headers: { Authorization: `Bearer ${token}` },
          signal: ac.signal,
        });

        if (!userRes.ok) {
          // token invalid / expired
          if (userRes.status === 401) {
            localStorage.removeItem("token");
            if (window.location.pathname !== "/login") navigate("/login");
          }
          setLoading(false);
          return;
        }

        const userData = await userRes.json();
        setUser(userData);

        // fetch setups (only after we have a good token)
        const setupsRes = await fetch("http://127.0.0.1:8000/api/setups/", {
          headers: { Authorization: `Bearer ${token}` },
          signal: ac.signal,
        });

        if (setupsRes.ok) {
          const setupsData = await setupsRes.json();
          setSetups(setupsData);
        } else {
          setSetups([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Profile load error:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    loadAll();

    return () => ac.abort();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <nav className="bg-gradient-to-r from-yellow-500 to-red-500 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold text-black">🎥 SetApp</h1>
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/add-setup" className="hover:text-yellow-200">Add Setup</Link>
          <button onClick={handleLogout} className="hover:text-yellow-200">Logout</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Welcome, {user?.first_name || user?.username} 👋
        </h2>

        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 mb-10 border border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Profile Details</h3>
          <p className="mb-2"><strong>Name:</strong> {user?.first_name} {user?.last_name}</p>
          <p className="mb-2"><strong>Role:</strong> {user?.role}</p>
          <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">My Setups</h3>
        {setups.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {setups.map((setup) => (
              <div
                key={setup.id}
                className="bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-500 transition"
              >
                <h4 className="font-semibold text-lg">{setup.title}</h4>
                <p className="text-sm text-gray-400 mt-2">{setup.description}</p>
                <p className="mt-3 text-xs text-gray-500">{new Date(setup.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No setups added yet.</p>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/add-setup"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg shadow hover:scale-105 transition-transform"
          >
            ➕ Add New Setup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
