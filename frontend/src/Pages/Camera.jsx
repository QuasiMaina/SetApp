import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Camera as CameraIcon,
  Battery,
  MemoryStick,
  Filter as FilterIcon,
  Package,
  Trash2,
  PlusCircle,
} from "lucide-react";

/* ---------- Helper ---------- */
function genId() {
  return Math.random().toString(36).substring(2, 9);
}

/* ---------- Reusable dropdown wrapper ---------- */
function DropdownSection({ title, icon: Icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <h2 className="text-xl font-semibold flex items-center gap-3 text-yellow-400">
          <Icon size={20} /> {title}
        </h2>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && <div className="mt-4 text-gray-300 space-y-4">{children}</div>}
    </div>
  );
}

/* ---------- Tabbed Recommended Kits ---------- */
function RecommendedKits() {
  const tabs = [
    {
      key: "budget",
      label: "Budget Kit",
      body: (
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          <li>Canon R10 / Sony a6400 + kit lens</li>
          <li>50mm f/1.8 prime</li>
          <li>2× SDXC V30 (64–128GB)</li>
          <li>2–3 OEM batteries</li>
          <li>Light tripod, on-camera mic</li>
          <li>Variable ND, polarizer</li>
        </ul>
      ),
    },
    {
      key: "indie",
      label: "Indie Kit",
      body: (
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          <li>Sony FX3 or Canon R6 II</li>
          <li>24–70mm + 70–200mm f/2.8</li>
          <li>2× CFexpress + SD backup</li>
          <li>6–8 NP-FZ100 batteries</li>
          <li>Rig cage, follow focus, matte box</li>
          <li>7″ monitor, wireless lav</li>
        </ul>
      ),
    },
    {
      key: "netflix",
      label: "Netflix Kit",
      body: (
        <ul className="list-disc list-inside space-y-1 text-gray-200">
          <li>ARRI Alexa Mini LF / Sony Venice</li>
          <li>Cooke / Zeiss / ARRI primes</li>
          <li>Codex / RED Mini-Mag media</li>
          <li>V-Mount batteries</li>
          <li>Pro matte box, IRNDs</li>
          <li>Wireless video + timecode</li>
        </ul>
      ),
    },
  ];

  const [active, setActive] = useState(tabs[0].key);

  return (
    <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg">
      <div className="flex gap-2 flex-wrap mb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              active === t.key
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="text-sm">{tabs.find((t) => t.key === active)?.body}</div>
    </div>
  );
}

/* ---------- Add Your Own Kit ---------- */
function AddYourKit({ customKits, setCustomKits }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    level: "Beginner",
    camera: "",
    lenses: "",
    cards: "",
    batteries: "",
    accessories: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const addKit = () => {
    if (!form.name.trim()) return;
    setCustomKits((k) => [...k, { ...form, id: genId(), open: false }]);
    setForm({
      name: "",
      level: "Beginner",
      camera: "",
      lenses: "",
      cards: "",
      batteries: "",
      accessories: "",
    });
    setOpen(false);
  };

  const toggleKit = (id) =>
    setCustomKits((kits) =>
      kits.map((k) => (k.id === id ? { ...k, open: !k.open } : k))
    );

  const removeKit = (id) =>
    setCustomKits((kits) => kits.filter((k) => k.id !== id));

  return (
    <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full"
      >
        <h2 className="text-lg font-semibold flex items-center gap-3 text-yellow-400">
          <Package size={18} /> Add Your Own Kit
        </h2>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <div className="mt-6 space-y-4">
          {/* Form */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              <h1 className="text-lg font-semibold text-yellow-400">RECOMMENDED</h1>,
              { label: "Kit Name *", name: "name", placeholder: "A7S III Doc Rig" },
              { label: "Camera Body", name: "camera", placeholder: "Sony FX3, etc." },
              { label: "Lenses", name: "lenses", placeholder: "24–70, 50mm f/1.8" },
              { label: "Cards", name: "cards", placeholder: "Media type & size" },
              { label: "Batteries", name: "batteries", placeholder: "NP-FZ100, etc." },
            ].map((f) => (
              <div key={f.name} className="space-y-2">
                <label className="text-sm text-gray-300">{f.label}</label>
                <input
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Level</label>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-yellow-400"
              >
                {["Beginner", "Intermediate", "Pro", "Specialized"].map((lvl) => (
                  <option key={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Accessories</label>
            <textarea
              name="accessories"
              value={form.accessories}
              onChange={handleChange}
              rows={3}
              placeholder="Monitors, matte box, wireless…"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={addKit}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500"
            >
              <PlusCircle size={18} /> Add Kit
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>

          {/* Custom kits list */}
          {customKits.length > 0 && (
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {customKits.map((k) => (
                <div
                  key={k.id}
                  className="bg-gray-700 rounded-xl p-4 border border-gray-600"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold text-yellow-300">{k.name}</p>
                      <p className="text-xs text-gray-300">{k.level}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleKit(k.id)}
                        className="text-gray-200 hover:text-yellow-400"
                      >
                        {k.open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <button
                        onClick={() => removeKit(k.id)}
                        className="text-red-300 hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  {k.open && (
                    <div className="mt-3 text-sm text-gray-200 space-y-1">
                      {["camera", "lenses", "cards", "batteries", "accessories"].map(
                        (f) =>
                          k[f] && (
                            <p key={f}>
                              <span className="text-gray-400 capitalize">{f}:</span>{" "}
                              {k[f]}
                            </p>
                          )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- Main page ---------- */
export default function Camera() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({});
  const [customKits, setCustomKits] = useState([]);

  const toggleExpand = (idx, section) =>
    setExpanded((prev) => ({
      ...prev,
      [idx]: { ...prev[idx], [section]: !prev[idx]?.[section] },
    }));

  // full setups
  const setups = [
    {
      level: "Beginner",
      title: "DSLR Starter Kit",
      description: "Perfect for beginners. A DSLR with a standard 50mm lens offers sharp images and a cinematic shallow depth of field.",
      lenses: "Canon 50mm f/1.8 • Nikon 35mm f/1.8 • Sony 50mm f/1.8",
      cards: "SanDisk Extreme Pro 64GB • Lexar Professional 1000x",
      batteries: "Canon LP-E6N • Nikon EN-EL15 • Sony NP-FW50",
      accessories: "Tripod, simple LED panel, Rode VideoMic",
      use: "Student films, YouTube, interviews",
      image: "https://share.google/images/F35hT4NknLqL8qyTu",
    },
    {
      level: "Intermediate",
      title: "Cinema Rig with Matte Box",
      description: "A step up for indie filmmakers. Add a matte box, follow focus, and rails for more control.",
      lenses: "Sigma Cine Primes • Canon CN-E • Rokinon Xeen",
      cards: "Sony Tough SD Cards • Angelbird AV Pro CFexpress",
      batteries: "Sony NP-F970 • V-Mount 98Wh",
      accessories: "Follow focus, rig cage, matte box, external monitor",
      use: "Short films, commercials, music videos",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1e5?auto=format&fit=crop&w=1400&q=80",
    },
    {
      level: "Pro",
      title: "High-End Cinema Setup",
      description: "Professional cinema cameras like ARRI Alexa or RED Komodo with full cage setups for major productions.",
      lenses: "Cooke S4/i • Zeiss Master Primes • ARRI Signature Primes",
      cards: "RED Mini-Mag • ARRI Codex • CFast 2.0",
      batteries: "V-Mount 150Wh+ • Block batteries",
      accessories: "Wireless video, cinema matte box, dolly/tripod",
      use: "Feature films, Netflix shows, high-end ads",
      image: "https://images.unsplash.com/photo-1581092334607-1e7b1681b6a7?auto=format&fit=crop&w=1400&q=80",
    },
    {
      level: "Specialized",
      title: "Run & Gun Documentary Kit",
      description: "Compact mirrorless setup with stabilization for documentary and fast-paced shooting.",
      lenses: "Sony 24-70mm f/2.8 • Canon RF 24-105mm • Panasonic Leica 12-35mm",
      cards: "SanDisk Extreme Pro SDXC • Sony Tough SD",
      batteries: "Sony NP-FZ100 • Canon LP-E6NH",
      accessories: "Gimbal, lavalier mics, lightweight monopod",
      use: "Docs, vlogs, news reporting",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=80",
    },
    {
      level: "Specialized",
      title: "Drone Setup",
      description: "Capture cinematic aerial shots with a lightweight drone. Essential for establishing shots.",
      lenses: "Built-in wide (24mm equiv.)",
      cards: "High-speed microSD UHS-II",
      batteries: "DJI Intelligent Flight Batteries",
      accessories: "ND filters, spare props, tablet holder",
      use: "Landscapes, establishing, action",
      image: "https://images.unsplash.com/photo-1508612761958-e931d843bdd1?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const filtered = filter === "All" ? setups : setups.filter((s) => s.level === filter);

  // HERO AREA

  return (
    <div className="w-full min-h-screen text-white px-6 md:px-10 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <main className="max-w-7xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            🎥 CAMERA DEPARTMENT
          </h1>
          <p className="text-gray-300 mt-3 max-w-3xl">
            Browse recommended kits, learn core camera knowledge, and add your own kits.
          </p>
        </header>

        {/* Top row */}

        <div className="grid lg:grid-cols-3 gap-3 items-start">
          <RecommendedKits />
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <DropdownSection title="Camera Types" icon={CameraIcon} defaultOpen>
              <p>DSLR, Mirrorless, Cinema, Action</p>
            </DropdownSection>
            <DropdownSection title="Filters" icon={FilterIcon}>
              <p>ND, Polarizer, Diffusion, UV</p>
            </DropdownSection>
            <DropdownSection title="Memory Cards" icon={MemoryStick}>
              <p>SDXC, CFexpress, CFast</p>
            </DropdownSection>
            <DropdownSection title="Batteries / Power" icon={Battery}>
              <p>NP-FZ100, V-Mounts, PD Banks</p>
            </DropdownSection>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3">
          {["All", "Beginner", "Intermediate", "Pro", "Specialized"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilter(lvl)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                filter === lvl
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((s, idx) => (
            <article
              key={s.title}
              className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden"
            >
              <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-yellow-300">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Best for:</span> {s.use}
                </p>
                {["lenses", "cards", "batteries", "accessories"].map((section) => (
                  <div key={section} className="border-t border-gray-800 pt-2">
                    <button
                      onClick={() => toggleExpand(idx, section)}
                      className="flex justify-between w-full text-sm font-semibold text-gray-300 hover:text-yellow-400"
                    >
                      {section}
                      {expanded[idx]?.[section] ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>
                    {expanded[idx]?.[section] && (
                      <p className="text-gray-400 mt-2 text-sm">{s[section]}</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Add Your Own Kit */}
        <AddYourKit customKits={customKits} setCustomKits={setCustomKits} />
      </main>
    </div>
  );
}
