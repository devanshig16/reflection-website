"use client";
import { useState } from "react";

export default function WeekCard({ week, data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#f0e0ff] text-black rounded-xl p-6 shadow-xl w-full max-w-xl transition-transform duration-300 hover:scale-105">
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-2xl font-bold text-[#7c2aa8]">Week {week}</h2>
    <button
      onClick={() => setExpanded(!expanded)}
      className="bg-[#d4b3ff] text-[#4c0f76] border border-[#7c2aa8] px-4 py-1 rounded hover:bg-[#e6d4ff] hover:text-black transition duration-300"
    >
      {expanded ? "Hide" : "View"} Reflection
    </button>
  </div>


      {expanded && (
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-bold">📘 Key Learning Moments</h3>
            <p>{data.learning}</p>
          </div>
          <div>
            <h3 className="font-bold">🌐 Personal Connections</h3>
            <p>{data.connection}</p>
          </div>
          <div>
            <h3 className="font-bold">🧗 Challenges and Growth</h3>
            <p>{data.challenges}</p>
          </div>
          <div>
            <h3 className="font-bold">🤖 AI Tool Documentation</h3>
            <p>{data.aiTool}</p>
          </div>
        </div>
      )}
    </div>
  );
}
