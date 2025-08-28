"use client";

import { useRouter } from "next/navigation";
import WeekCard from "@/components/WeekCard";

const reflections = [
  {
    week: 1,
    data: {
      learning: "I explored how vibe coding works and how i can use AI to quickly whip-up a website in a span of a few hours.",
      connection: "As a CS student, it helped me understand how AI supports the creative aspect of my CS Major. How i can explore design and color all the while writing efficient code.",
      challenges: "I had difficulty narrowing down my thoughts but using ChatGPT helped me organize ideas. It helped me settle on the gaming theme as well as suggested color combinations and fonts",
      aiTool: "Used ChatGPT for vibe coding, Canva AI for creating some background icons",
    },
  },
  {
    week: 2,
    data: {
      learning: 'See next week!',
      connection: 'See next week!',
      challenges: 'See next week',
      aiTool: "See next week",
    },
  },
  // Add more weeks here...
];

export default function AIReflections() {
  const router = useRouter();

  return (
    <div
      className="font-mono min-h-screen p-6"
      style={{
        background: "linear-gradient(135deg, #fdf3d4, #f6d1f1)",
      }}
    >
      <div className="flex justify-between items-center mb-12 max-w-xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-center text-[#a419b8] flex-grow">
          🧠 AI Reflections Hub
        </h1>

        <button
          onClick={() => router.push("/")}
          className="ml-4 px-4 py-2 rounded bg-[#a419b8] text-white font-semibold hover:bg-[#7c1281] transition"
          aria-label="Go back to main page"
        >
          Home
        </button>
      </div>

      <div className="flex flex-col items-center space-y-8 max-w-xl mx-auto">
        {reflections.map((week) => (
          <WeekCard key={week.week} week={week.week} data={week.data} />
        ))}
      </div>
    </div>
  );
}
