import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Lighting() {
  const [activeTab, setActiveTab] = useState("basics");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    lights: "",
    stands: "",
    clamps: "",
    modifiers: "",
    power: "",
    accessories: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Lighting Kit:", form);
    setForm({
      name: "",
      lights: "",
      stands: "",
      clamps: "",
      modifiers: "",
      power: "",
      accessories: "",
    });
    setShowForm(false);
  };

  return (
    <div className="w-full min-h-screen px-6 md:px-10 py-18 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <main className="max-w-8x5 mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            💡 Lighting Department
          </h1>
          <p className="text-gray-300 mt-3 max-w-3xl text-base">
            From beginner setups to pro-level rigs — learn how to shape light
            with the right tools, techniques, and accessories.
          </p>
        </header>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-800 p-2 rounded-lg flex flex-wrap gap-2">
            <TabsTrigger
              value="basics"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-4 py-1.5 rounded-md text-sm"
            >
              Beginner
            </TabsTrigger>
            <TabsTrigger
              value="intermediate"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-4 py-1.5 rounded-md text-sm"
            >
              Intermediate
            </TabsTrigger>
            <TabsTrigger
              value="pro"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-4 py-1.5 rounded-md text-sm"
            >
              Pro
            </TabsTrigger>
          </TabsList>

          {/* Beginner */}
          <TabsContent value="basics" className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🎬 Three-Point Lighting</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>
                  Key, fill, and backlight basics. Standard for interviews and
                  tutorials.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Natural and balanced look</li>
                  <li>✅ Easy to replicate</li>
                  <li>⚠️ Needs 3 lights minimum</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">💡 Practical Lights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>Lamps, bulbs, and natural sources for realism and mood.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Cheap and flexible</li>
                  <li>✅ Great for atmosphere</li>
                  <li>⚠️ Limited control</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Intermediate */}
          <TabsContent
            value="intermediate"
            className="mt-6 grid gap-6 md:grid-cols-2"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">📦 Softboxes & Diffusion</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>Soft light using softboxes, diffusion, or bounce. Great for faces.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Flattering portraits</li>
                  <li>✅ Smooth shadows</li>
                  <li>⚠️ Bulky to carry</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🔵 LED Panels</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>Portable, dimmable lights with adjustable color temperature.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Lightweight and flexible</li>
                  <li>✅ Battery-powered</li>
                  <li>⚠️ Flat look without modifiers</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pro */}
          <TabsContent value="pro" className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🌞 HMIs</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>Daylight-balanced high-output fixtures for outdoor/big sets.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Mimics sunlight</li>
                  <li>✅ Extremely bright</li>
                  <li>⚠️ Expensive & power-heavy</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🎨 ARRI SkyPanel</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>RGBWW industry standard fixture with cinematic controls.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Full color range</li>
                  <li>✅ Programmable effects</li>
                  <li>⚠️ Very costly</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🎭 Advanced Modifiers</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>Flags, grids, snoots, and gobos for precision control.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Cinematic shaping</li>
                  <li>✅ Eliminates spill</li>
                  <li>⚠️ Needs skilled use</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommended Kits */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">🔧 Recommended Lighting Kits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🎒 Budget Kit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  <li>2x LED panels</li>
                  <li>Clamp lights & bulbs</li>
                  <li>Basic reflectors</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🎥 Indie Filmmaker Kit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  <li>3x Bi-color LED panels</li>
                  <li>Softbox modifiers</li>
                  <li>C-stands & diffusion</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">🏆 Pro Production Kit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  <li>4x ARRI Skypanels</li>
                  <li>HMI daylight fixtures</li>
                  <li>Grip/flag kit</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg">🎬 Netflix-Approved Kit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  <li>ARRI Skypanels & Orbiter</li>
                  <li>Astera Titan tubes</li>
                  <li>Large-scale HMIs</li>
                  <li>Complete grip package</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Add Your Own Kit */}
        <section className="space-y-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium text-sm"
          >
            {showForm ? "➖ Cancel" : "➕ Add Your Own Kit"}
          </button>

          {showForm && (
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Add Your Lighting Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Kit Name (e.g., My Indie Setup)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="lights"
                    value={form.lights}
                    onChange={handleChange}
                    placeholder="Lights (e.g., 2x LED Panels, 1x HMI)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="stands"
                    value={form.stands}
                    onChange={handleChange}
                    placeholder="Stands (e.g., 2x C-stands, 1x Baby Stand)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="clamps"
                    value={form.clamps}
                    onChange={handleChange}
                    placeholder="Clamps (e.g., 2x Cardellini, 4x A-Clamps)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="modifiers"
                    value={form.modifiers}
                    onChange={handleChange}
                    placeholder="Modifiers (e.g., Softbox, Grid, Flags)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="power"
                    value={form.power}
                    onChange={handleChange}
                    placeholder="Power/Batteries (e.g., 2x V-Mounts)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Input
                    name="accessories"
                    value={form.accessories}
                    onChange={handleChange}
                    placeholder="Accessories (e.g., Gels, Sandbags, Cables)"
                    className="bg-gray-900 border-gray-700 text-white text-sm"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-sm"
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
