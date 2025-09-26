import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Make Navbar absolute so it sits on top of background */}
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center h-full relative z-10">
        {/* Background cinematic glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>

        {/* Hero content */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg">
          Welcome to SetApp
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          A collaborative space for <span className="text-yellow-400">DOPs</span>,{" "}
          <span className="text-red-400">Gaffers</span>,{" "}
          <span className="text-yellow-300">1st ACs</span> and{" "}
          <span className="text-orange-400">Grips</span>. Discover setups, share
          ideas, and create cinematic magic.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-6">
          <Link
            to="/signup"
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-purple-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
