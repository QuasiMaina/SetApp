import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FirstAC() {
  const [activeTab, setActiveTab] = useState("focus");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full min-h-screen px-6 md:px-10 py-18 bg-gradient-to-br from-teal-900 via-gray-900 to-black text-white">
      <main className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">
            🎯 1st Assistant Camera (1st AC)
          </h1>
          <p className="text-gray-300 mt-3 max-w-3xl">
            The 1st AC keeps the camera sharp, lenses organized, and workflow smooth.
            From pulling focus to prepping kits — explore tools, tips, and best practices.
          </p>
        </header>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-800 p-2 rounded-lg flex flex-wrap gap-2">
            <TabsTrigger
              value="focus"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Focus Tools
            </TabsTrigger>
            <TabsTrigger
              value="lenses"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Lens Management
            </TabsTrigger>
            <TabsTrigger
              value="workflow"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              On-Set Workflow
            </TabsTrigger>
          </TabsList>

          {/* Focus Tools */}
          <TabsContent value="focus" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="follow-focus">
                <AccordionTrigger>🎛️ Follow Focus Systems</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Manual and wireless systems for precision pulling.
                    Brands: Tilta Nucleus, ARRI WCU-4, Preston FIZ.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="monitors">
                <AccordionTrigger>📺 Focus Monitors</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    High-res monitors with peaking, false color, and zoom
                    to ensure sharp focus under any condition.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="measuring">
                <AccordionTrigger>📏 Measuring Tools</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Laser rangefinders, tape measures, and focus charts
                    for consistent accuracy on set.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Lens Management */}
          <TabsContent value="lenses" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="primes">
                <AccordionTrigger>🔍 Prime Lenses</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Managing fast primes (T1.3–T2) for shallow DOF and creative
                    control. Keep clean, marked, and ready for swaps.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="zooms">
                <AccordionTrigger>🎥 Zoom Lenses</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Handling cinema zooms with balance and rig stability.
                    Popular: Angénieux, Fujinon, Canon CN-E.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="filters">
                <AccordionTrigger>🧾 Filters & Accessories</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    ND filters, polarizers, diffusion filters — stored in filter
                    trays for quick swaps and consistency.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Workflow */}
          <TabsContent value="workflow" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="slating">
                <AccordionTrigger>🎬 Slating & Marks</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Clear slates for sync and accurate lens marks with pens and tape.
                    Precision marking ensures repeatable pulls.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prep-kit">
                <AccordionTrigger>🛠️ Camera Prep Kit</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Includes tools, lens cloths, batteries, tape, charts —
                    the essentials every AC relies on daily.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data">
                <AccordionTrigger>💾 Data Workflow</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Offloading media, verifying backups, and collaborating with
                    the DIT to secure footage safely.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Recommended Kits Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">🎒 Recommended 1st AC Kits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>🎯 Beginner Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Basic manual follow focus</li>
                  <li>Lens cleaning kit & blower</li>
                  <li>Gaffer tape & dry-erase markers</li>
                  <li>Small slate</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>⚡ Intermediate Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Tilta Nucleus wireless FF</li>
                  <li>Focus monitor w/ peaking & false color</li>
                  <li>Matte box with ND filters</li>
                  <li>Laser rangefinder</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>🏆 Pro AC Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>ARRI WCU-4 or Preston FIZ wireless system</li>
                  <li>Full filter set (ND, diffusion, polarizers)</li>
                  <li>Professional prep kit (charts, tools, media)</li>
                  <li>High-bright HDR monitor</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Add Your Own Setup */}
        <section className="space-y-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-medium"
          >
            {showForm ? "➖ Cancel" : "➕ Add Your Own 1st AC Setup"}
          </button>

          {showForm && (
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Add Your 1st AC Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input
                    placeholder="Setup Name (e.g., My Wireless Workflow)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Focus Tools (e.g., Nucleus, ARRI WCU-4)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Lens Accessories (e.g., filters, matte box)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Workflow Notes (e.g., backup process, marking system)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-500"
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
