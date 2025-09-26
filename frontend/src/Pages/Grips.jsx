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
import { Textarea } from "@/components/ui/textarea";

export default function Grip() {
  const [activeTab, setActiveTab] = useState("basics");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-teal-900 via-gray-900 to-black text-white">
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            🔧 Grip Department
          </h1>
          <p className="text-gray-300 mt-3 max-w-3xl">
            Grips are the backbone of any film set — handling rigging, movement,
            and safety. From C-stands to cranes, they make sure every shot is
            possible and safe.
          </p>
        </header>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-800 p-2 rounded-lg flex flex-wrap gap-2">
            <TabsTrigger
              value="basics"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Basics
            </TabsTrigger>
            <TabsTrigger
              value="rigging"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Rigging & Mounts
            </TabsTrigger>
            <TabsTrigger
              value="movement"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Movement
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Support Gear
            </TabsTrigger>
            <TabsTrigger
              value="power"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              Power & Generators
            </TabsTrigger>
          </TabsList>

          {/* Basics */}
          <TabsContent value="basics" className="mt-6">
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>📖 Grip Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300">
                <p>
                  Grips handle <strong>rigging, camera movement, and set safety</strong>. They
                  work closely with camera and lighting to ensure smooth and
                  safe setups.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Set up stands, rigs, and mounts</li>
                  <li>Operate dollies, cranes, and sliders</li>
                  <li>Secure lights and modifiers</li>
                  <li>Distribute power safely</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rigging */}
          <TabsContent value="rigging" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="c-stands">
                <AccordionTrigger>🦾 C-Stands & Clamps</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    The backbone of grip work — holding lights, flags, and rigs securely.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rigs">
                <AccordionTrigger>🚗 Car Rigs & Mounts</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Suction cups, hostess trays, and speed rail setups for safe vehicle shots.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Movement */}
          <TabsContent value="movement" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="sliders">
                <AccordionTrigger>🎢 Sliders & Dollies</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Smooth tracking shots and camera movement for cinematic feel.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cranes">
                <AccordionTrigger>🚁 Cranes & Jibs</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Dynamic sweeping shots from high or low perspectives.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="sandbags">
                <AccordionTrigger>🏋️ Sandbags & Weights</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Safety essentials for stabilizing gear and preventing accidents.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="flags">
                <AccordionTrigger>🚩 Flags & Nets</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Control and shape light spill with precision.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Power */}
          <TabsContent value="power" className="mt-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="generators">
                <AccordionTrigger>⚡ Generators</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Portable power for location shoots — includes quiet film set gensets.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cables">
                <AccordionTrigger>🔌 Cables & Distribution</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300">
                    Stingers, distro boxes, and power cables — managed safely by grips.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Recommended Kits */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">🎒 Recommended Grip Kits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>🔧 Beginner Grip Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>C-stands & clamps</li>
                  <li>Sandbags & gaffer tape</li>
                  <li>Apple boxes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>⚡ Intermediate Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Sliders / dolly track</li>
                  <li>Flags & nets</li>
                  <li>Basic power distro</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle>🏆 Pro Grip Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Cranes / jibs</li>
                  <li>Steadicam / gimbal</li>
                  <li>Full distro + generator</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Essentials */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-400">
            🛡️ Grip Safety Essentials
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Gloves (for handling hot lights & heavy gear)</li>
            <li>Safety cables and ties (for rigging overhead equipment)</li>
            <li>Clear communication with camera & lighting teams</li>
            <li>Marking trip hazards with tape</li>
            <li>Always secure stands with sandbags</li>
          </ul>
        </section>

        {/* Add Your Own Setup */}
        <section className="space-y-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-lg font-medium"
          >
            {showForm ? "➖ Cancel" : "➕ Add Your Own Grip Setup"}
          </button>

          {showForm && (
            <Card className="bg-gray-800 border border-gray-700 text-white mt-4">
              <CardHeader>
                <CardTitle>Add Grip Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input
                    placeholder="Setup Title"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Textarea
                    placeholder="Description (e.g., A car rig for mounting cameras safely on vehicles)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Setup Type (e.g., Rigging, Movement, Support, Power)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Department (e.g., Grip, Camera, Lighting)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Input
                    placeholder="Key Equipment (e.g., C-stands, sliders, clamps)"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-500"
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
