// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Camera,
  Lightbulb,
  Wrench,
  Focus,
  Theater,
  Info,
  LogIn,
  Package,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Read token once per render
  const token = localStorage.getItem("token");

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (!token) {
      setUser(null);
      return; // no token -> nothing to fetch
    }

    const ac = new AbortController();
    async function fetchProfile() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/users/profile/", {
          headers: { Authorization: `Bearer ${token}` },
          signal: ac.signal,
        });

        // if not ok (401/403/404) don't call setUser with broken payload
        if (!res.ok) {
          // if token invalid, clear it and optionally redirect to login
          if (res.status === 401) {
            localStorage.removeItem("token");
            // only navigate if we're not already at /login
            if (location.pathname !== "/login") navigate("/login");
          }
          setUser(null);
          return;
        }

        const data = await res.json();
        // avoid unnecessary setState if identical (shallow check)
        if (!data) return;
        if (
          !user ||
          user.username !== data.username ||
          user.first_name !== data.first_name ||
          user.last_name !== data.last_name
        ) {
          setUser(data);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Navbar fetch profile error:", err);
        setUser(null);
      }
    }

    fetchProfile();

    return () => ac.abort();
    // we intentionally depend on token and location.pathname only
    // token changes when user logs in/out; location used to avoid redirect loops
  }, [token, navigate, location.pathname]); // stable dependencies

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const linkClasses = (path) =>
    `flex items-center gap-2 transition-all ${
      isActive(path)
        ? "text-pink-400 border-b-2 border-pink-500"
        : "text-gray-300 hover:text-pink-400 hover:border-b-2 hover:border-pink-500"
    }`;

  return (
    <nav
      className={`w-full px-6 py-3 flex justify-between items-center fixed top-0 left-0 z-50 transition-colors
        ${isLanding ? "bg-transparent" : "bg-gradient-to-r from-black via-gray-900 to-black shadow-md"}
      `}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center h-14">
        <img
          src="/setapp-logo.png"
          alt="SetApp Logo"
          className="max-h-full w-auto object-contain hover:scale-110 transition-transform"
          style={{ filter: "none" }}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link to="/camera" className={linkClasses("/camera")}><Camera size={18}/> Camera</Link>
        <Link to="/lighting" className={linkClasses("/lighting")}><Lightbulb size={18}/> Lighting</Link>
        <Link to="/grip" className={linkClasses("/grip")}><Wrench size={18}/> Grip</Link>
        <Link to="/firstAC" className={linkClasses("/firstAC")}><Focus size={18}/> First AC</Link>
        <Link to="/scenarios" className={linkClasses("/scenarios")}><Theater size={18}/> Scenarios</Link>
        <Link to="/about" className={linkClasses("/about")}><Info size={18}/> About</Link>
        {token && <Link to="/setups" className={linkClasses("/setups")}><Package size={18}/> My Setups</Link>}
      </div>

      {/* Auth / User */}
      <div className="hidden md:flex items-center gap-4">
        {!token ? (
          <Link
            to="/login"
            className="flex items-center gap-2 bg-pink-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-pink-600 transition-colors"
          >
            <LogIn size={18} /> Login
          </Link>
        ) : (
          <>
            {user && (
              <Link to="/profile" className="flex items-center gap-2 text-pink-400 hover:text-red-400 transition-colors">
                <User size={18} /> {user.first_name || user.username}
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden text-gray-300 hover:text-pink-400 transition" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-black bg-opacity-95 p-6 rounded-lg shadow-lg flex flex-col gap-4 md:hidden">
          <Link to="/camera" className={linkClasses("/camera")}>🎥 Camera</Link>
          <Link to="/lighting" className={linkClasses("/lighting")}>💡 Lighting</Link>
          <Link to="/grip" className={linkClasses("/grip")}>🔧 Grip</Link>
          <Link to="/firstAC" className={linkClasses("/firstAC")}>🎯 First AC</Link>
          <Link to="/scenarios" className={linkClasses("/scenarios")}>🎭 Scenarios</Link>
          <Link to="/about" className={linkClasses("/about")}>ℹ️ About</Link>
          {token && <Link to="/setups" className={linkClasses("/setups")}>📦 My Setups</Link>}
          {!token ? (
            <Link to="/login" className="bg-pink-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-pink-600">Login</Link>
          ) : (
            <>
              {user && <Link to="/profile" className="text-pink-400">👤 {user.first_name || user.username}</Link>}
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
