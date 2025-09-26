import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      {/* Show Navbar only if not landing */}
      {!isLanding && <Navbar />}

      {/* Page content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
