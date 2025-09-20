"use client";

import { useRouter } from "next/navigation";
import WeekCard from "@/components/WeekCard";
import Link from "next/link";

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
      learning: 'This week, we discussed the potential of AI for good versus AI used with no specific goal. I explored new AI tools designed for students, learning how they can enhance creativity and productivity in academic settings.',
      connection: (
        <>
          I experimented with HeyGen to create a new icon of me waving for my{" "}
          <Link href="/about-me" className="text-blue-600 underline hover:text-blue-800">
            About Me
          </Link>{" "}
          section. It was exciting to see AI bring a personal touch to my projects while keeping it fun and interactive.
        </>
      ),
      challenges: 'It was sometimes hard to differentiate between AI tools that genuinely help me versus those that are just entertaining. I had to focus on purpose and usability while experimenting.',
      aiTool: "ChatGPT (idea exploration & discussion prep), HeyGen (creating personalized visuals)",
    },
  },
  {
    week: 3,
    data: {
      learning: "This week, I used AI to create detailed international student personas and simulate interviews to test my 'Bureaucracy Buddy' app idea. I learned how AI can help me anticipate different users’ pain points and refine a solution before actual user testing.",
      connection: (
        <>
          I explored how each persona—like first-year undergrads, grad students, exchange students, and student leaders—interacts differently with bureaucratic tasks. Using AI helped me understand which app features would matter most to each group and how I could personalize guidance. It felt like getting mini focus groups instantly.
        </>
      ),
      challenges: "It was tricky to design questions that would elicit meaningful responses from each persona and to balance between too generic versus too specific prompts. Also, interpreting AI feedback required me to critically think about what’s realistic versus idealized.",
      aiTool: "ChatGPT for persona generation and simulated interviews; Claude 3 for additional perspective and alternative persona scenarios.",
    },
  },
  {
    week: 4,
    data: {
      learning: "This week, I built my Bureaucracy Buddy prototype using multiple AI platforms. I learned how to combine Bolt.new for frontend development, ChatGPT’s API for a contextual chatbot, and Gradio for document upload demos. Working through the project helped me understand the strengths and limitations of each platform, and how to leverage them together to solve a real-world problem. I also learned the importance of planning user flows and integrating features conceptually, even when full technical integration isn’t possible within a short timeframe. Testing and iterating on the prototype showed me how small changes—like clarifying instructions in the chatbot or improving the document upload interface—can greatly improve usability.",
      connection: (
        <>
          As an international student myself, I can see how the features I built could
          directly help new students navigating banking, visas, and healthcare. Designing the app allowed me to apply concepts from class while thinking practically about user experience. It was rewarding to simulate how someone would actually use the app, seeing how AI could make complex bureaucratic processes simpler and more approachable. It also made me reflect on my own experiences as a student and how tools like this could have helped me earlier.
        </>
      ),
      challenges: "The hardest part was figuring out how to connect different AI platforms conceptually, since not all of them integrate seamlessly. I also ran into technical issues, like debugging API calls for the chatbot and ensuring Gradio demos worked smoothly. Balancing design, functionality, and AI capabilities took careful iteration. I learned to prioritize features and focus on what would be most valuable to the user while maintaining a clean and responsive interface.",
      aiTool: "Bolt.new for web app development and layout, OpenAI GPT API for chatbot assistant with contextual guidance, Gradio (via Google Colab) for document upload demos, and ChatGPT for prompt help and problem-solving during development.",
    },
  },
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
