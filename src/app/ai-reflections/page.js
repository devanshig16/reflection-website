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
  {
    week: 5,
    data: {
      learning: "This week, I conducted 2-3 customer interviews to validate the core assumptions of my AI solution concept. I learned how to craft effective questions to understand user problems, test solution desirability, and uncover current behaviors. Through these interviews, I realized the importance of listening more than talking, asking follow-up questions, and capturing exact user language to better align the solution with real needs. The process taught me how to gather actionable insights that directly inform product design and value proposition refinement.",
      connection: (
        <>
          As an international student myself, I could see how these interviews helped me understand the perspectives and challenges of potential users. Engaging with real people allowed me to connect classroom concepts with practical application. It was rewarding to see how feedback could shape features, messaging, and usability, reflecting the lived experiences of users and making the solution more relevant and impactful.
        </>
      ),
      challenges: "The hardest part was recruiting appropriate participants and ensuring the interviews stayed focused while allowing participants to share detailed experiences. I also struggled with summarizing insights objectively without letting my own assumptions influence the interpretation. Synthesizing feedback into clear patterns and actionable updates required careful attention and iteration.",
      aiTool: "Not applicable this week, as the focus was on human-centered interviews and analysis rather than AI platform development. However, I used standard tools for documentation, like Google Docs and spreadsheets, to organize responses and analyze patterns.",
    },
  },
  {
    week: 6,
    data: {
      learning: "This week I turned my interview insights into a prototype and storyboard. Using Gemini and Bolt, I made wireframes and interactive screens and saw how small features like checklists and reminders really help users.",
      connection: (
        <>
          As an international student, I could relate to the persona. Designing the prototype made me think about what I’d actually want—clarity, guidance, and privacy—while AI helped speed up the visuals.
        </>
      ),
      challenges: "Balancing feedback with simplicity was tricky. Participants suggested a Help/FAQ and clearer deadlines, and I had to include these without cluttering the interface.",
      aiTool: "I used Gemini and Bolt for wireframes and clickable prototypes, testing a few prompt variations and picking the best elements for the final design."
    }
  },
  {
    week: 7,
    data: {
      learning: "This week I worked on my Bureaucracy Buddy prototype, refining the flow and simplifying how users get AI help with confusing forms. I learned how much clarity and tone matter in building user trust.",
      connection: (
        <>
          I’ve dealt with similar paperwork issues, so I really connected with the user pain points. Designing this made me think about how to make something that feels friendly and helpful.
        </>
      ),
      challenges: "It was hard to keep things simple without losing important details. I had to adjust the layout and prompts a few times to get it right.",
      aiTool: "I used Gemini to improve the chatbot prompts and Bolt to tweak the prototype screens."
    }
  },
    {
      week: 8,
      data: {
        learning: "This week I focused on building and iterating the Bureaucracy Buddy prototype, especially refining the chatbot flow and making the checklist/reminder system more intuitive. I learned how vital user empathy and tone are when designing AI-powered tools that students can actually trust and rely on.",
        connection: (
          <>
            As an out-of-state student myself, I’ve felt that same sense of confusion trying to navigate forms, deadlines, and campus systems. Working on this project made me realize how design and AI can combine to ease that stress — turning a frustrating process into something clear and supportive.
          </>
        ),
        challenges: "Balancing personalization with simplicity was tough — I wanted the chatbot to sound human but still stay accurate and structured. Getting the prompts and layout to feel natural took multiple iterations.",
        aiTool: "I used Gemini to visualize the chatbot interface and generate tone variations, and Bolt.new to rapidly prototype and refine the UI based on feedback."
      }
    }
  }
  
  
  
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
