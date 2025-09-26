export default function About() {
  return (
    <div className="w-full min-h-screen px-6 md:px-10 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <main className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            🎬 About This Project
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Built out of a love for filmmaking, collaboration, and the desire to
            make technical knowledge more accessible for crews everywhere.
          </p>
        </section>

        {/* My Journey */}
        <section className="bg-gray-800/50 rounded-2xl p-8 shadow-lg space-y-4">
          <h2 className="text-3xl font-bold text-yellow-400">🌟 My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            This project started as a simple idea —{" "}
            <span className="text-white font-semibold">
              a quick reference tool for film crews
            </span>
            . I’ve always loved how camera, lighting, grip, and crew work
            together to bring stories alive, but often the knowledge is scattered
            or stuck in people’s heads. I wanted to build a space where DOPs,
            ACs, gaffers, and grips can easily explore setups and workflows.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-gray-800/50 rounded-2xl p-8 shadow-lg space-y-4">
          <h2 className="text-3xl font-bold text-yellow-400">🎯 Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            The goal is simple:{" "}
            <span className="text-white font-semibold">
              organize filmmaking knowledge in a clear, interactive way
            </span>
            . Whether it’s pulling focus, setting up a night interior, or
            planning a commercial shoot, this platform gives crews quick
            references and inspiration for their work.
          </p>
        </section>

        {/* How to Use */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            🚀 How to Use This Site
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-orange-400">📷 Camera</h3>
              <p className="text-gray-300 mt-2">
                Explore setups, rigs, and lens choices for different scenarios.
              </p>
            </div>
            <div className="bg-gray-800/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-orange-400">💡 Lighting</h3>
              <p className="text-gray-300 mt-2">
                Learn how to shape moods with key, fill, and backlighting.
              </p>
            </div>
            <div className="bg-gray-800/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-orange-400">🔧 Grip</h3>
              <p className="text-gray-300 mt-2">
                Support, stabilize, and move cameras with the right tools.
              </p>
            </div>
            <div className="bg-gray-800/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-orange-400">🎭 Scenarios</h3>
              <p className="text-gray-300 mt-2">
                Match setups with real-world scenes — commercials, drama,
                documentary, and more.
              </p>
            </div>
            <div className="bg-gray-800/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-orange-400">🎯 1st AC</h3>
              <p className="text-gray-300 mt-2">
                Dive into tools, lens management, and workflow guides for focus
                pullers.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Note */}
        <section className="text-center space-y-4">
          <p className="text-gray-400 italic">
            “This project is built with passion, late nights, and plenty of
            coffee. It’s for anyone who loves the craft of filmmaking as much as
            I do.”
          </p>
        </section>

        {/* Creator Profile */}
        <section className="flex flex-col items-center space-y-6 text-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Creator Avatar"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-lg"
          />
          <h3 className="text-2xl font-bold text-orange-400">
            Created by Quasi Maina
          </h3>
          <p className="text-gray-300 max-w-xl">
            A filmmaker, developer, and creative with a passion for making
            knowledge accessible. Always exploring the balance between technical
            precision and artistic vision.
          </p>

          {/* Contact Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="mailto:youremail@example.com"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              🔗 LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
