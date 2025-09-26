import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Scenario Data
const scenarios = [
  {
    title: "🌙 Night Exterior",
    type: "Exterior",
    camera:
      "Use full-frame cameras with strong low-light performance (Sony FX3, Canon C500 II, ARRI Alexa Mini LF). Pair with fast lenses (T1.5–T2).",
    lighting:
      "HMI lights for moonlight simulation, LED panels for fill, practical sources (streetlights, cars), and haze for atmosphere.",
    grips:
      "C-stands, flags for negative fill, fog machine for depth, and generators for powering HMIs.",
  },
  {
    title: "☀️ Day Exterior",
    type: "Exterior",
    camera:
      "DSLRs or cinema cameras with ND filters (Blackmagic 6K Pro, Canon C300 MkIII, Sony FX6). Lenses T2.8–T4 for depth control.",
    lighting:
      "Sun as the key light, 12x12 diffusion (silks), bounce boards, negative fill (black flags) to control contrast.",
    grips:
      "Sandbags for safety, reflectors, and portable generator for additional LEDs if needed.",
  },
  {
    title: "🏠 Night Interior",
    type: "Interior",
    camera:
      "Full-frame cameras (Sony FX9, ARRI Alexa Mini LF) with ISO 800–3200. Fast primes (35mm, 50mm T1.5).",
    lighting:
      "Practical lamps, dimmable LEDs, tungsten-balanced bulbs for warmth, and motivated light sources (windows, lampshades).",
    grips:
      "C-stands with flags for shaping light, diffusion frames, small dollies for movement.",
  },
  {
    title: "🏢 Commercial Studio",
    type: "Studio",
    camera:
      "High-resolution cinema cameras (RED Komodo, ARRI Alexa LF). Sharp lenses with controlled flaring (Cooke S4/i, Sigma Cine).",
    lighting:
      "Softboxes, large diffusion frames, Skypanels for RGB accents, controlled lighting ratios for polished look.",
    grips:
      "Overhead grid rigging, heavy-duty C-stands, dolly tracks for smooth moves.",
  },
  {
    title: "🎬 Documentary",
    type: "Mobile",
    camera:
      "Lightweight setups (Canon C70, Sony FX3, BMPCC 6K). Zoom lenses (24–105mm, 18–80mm cine zooms) for flexibility.",
    lighting:
      "Available light preferred. Portable LED panels and small reflectors. Keep kit minimal for mobility.",
    grips:
      "Light tripods, collapsible reflectors, monopod or handheld rig for flexibility.",
  },
  {
    title: "🎭 Drama Interior",
    type: "Interior",
    camera:
      "Cinema cameras with strong dynamic range (Alexa Mini LF, Sony Venice). Lenses with character (Cooke, Zeiss Supreme).",
    lighting:
      "Motivated lighting from windows/lamps. Use haze for depth. Key/fill ratios for mood.",
    grips:
      "Flags for contrast, sliders for movement, and smoke machines for atmosphere.",
  },
];

export default function Scenarios() {
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const filteredScenarios =
    filter === "All"
      ? scenarios
      : scenarios.filter((s) => s.type === filter);

  return (
    <div className="w-full min-h-screen px-6 md:px-10 py-18 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <main className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
            🎥 Shooting Scenarios
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Explore setups for different filming environments — from exteriors
            to studio shoots, with recommended camera, lighting, and grip setups.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {["All", "Exterior", "Interior", "Studio", "Mobile"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-md font-medium ${
                filter === t
                  ? "bg-pink-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Scenarios */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScenarios.map((s, i) => (
            <Card
              key={i}
              className="bg-gray-900 border border-gray-700 text-white"
            >
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="camera">
                    <AccordionTrigger>📷 Camera Setup</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300">{s.camera}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="lighting">
                    <AccordionTrigger>💡 Lighting Setup</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300">{s.lighting}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="grips">
                    <AccordionTrigger>🛠️ Grips & Accessories</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-300">{s.grips}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Add Your Own Scenario */}
        <section className="space-y-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-lg font-medium"
          >
            {showForm ? "➖ Cancel" : "➕ Add Your Own Scenario"}
          </button>

          {showForm && (
            <Card className="bg-gray-900 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Add Your Scenario</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input
                    placeholder="Scenario Name (e.g., Music Video Exterior)"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Camera Recommendations"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Lighting Recommendations"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Grips & Accessories"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-500"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </section>
      </main>
    </div>
  );
}
