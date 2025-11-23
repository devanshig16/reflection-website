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
    
    },
    {
      week: 9,
      data: {
        learning: "This week I spent time refining the overall project experience and reflecting on how every design choice — from layout spacing to tone of text — affects user perception. I learned how subtle changes in color balance, hierarchy, or even button phrasing can guide users toward a smoother experience. Beyond technical adjustments, I also deepened my understanding of iteration as a mindset rather than just a process. Each round of feedback revealed new ways to simplify, clarify, or humanize the interface. It reminded me that good design isn’t just about what looks polished — it’s about how seamlessly it helps people reach their goals.",
        connection: (
          <>
            I found myself connecting this work to my own experiences as a student trying to navigate confusing systems or tools. Every time I got frustrated with unclear instructions or clunky interfaces, I started analyzing why — and how a better design could’ve made that experience less stressful. That awareness made this week’s reflection more personal. It’s interesting to realize that the same principles we’re learning in class — empathy, iteration, and clarity — apply to real-world systems that we interact with every day. Seeing that connection between my personal life and my project work has made me appreciate how thoughtful design can genuinely reduce frustration and increase confidence for users like me.
          </>
        ),
        challenges: "One of the biggest challenges this week was managing multiple layers of feedback while still keeping a consistent vision. It’s easy to get caught up trying to incorporate every suggestion, but I had to learn how to filter feedback strategically — taking what strengthened the user experience without losing the project’s core identity. Another challenge was pacing myself through revisions. There were moments where I kept tweaking small visual details, only to realize I was drifting away from testing usability. Finding that balance between aesthetics and practicality was a key takeaway from this week.",
        aiTool: "I used ChatGPT and Figma’s AI assistant throughout the week to generate new design variations and rewrite microcopy that better matched the tone of the project. ChatGPT helped me brainstorm how to phrase prompts in a friendlier and more supportive way, while Figma’s AI features made it faster to experiment with layout adjustments. I also tried using Notion AI to organize notes and reflections, which helped me synthesize feedback from different sources and plan next steps more efficiently."
      }
  
    },
    {
      week: 10,
      data: {
        learning: "This week I focused on building the foundation for the Bureaucracy Buddy MVP. I learned that setting up the project repo, React/Tailwind environment, and Express backend early helps catch integration issues faster and provides a stable base for future features. Connecting the backend to the OpenAI API and scaffolding the chat interface reinforced how early infrastructure decisions affect the speed and reliability of subsequent development. I also realized that simplifying UI ambitions during setup is important to keep the project manageable and on schedule.",
        connection: (
          <>
            Working on the project setup made me think about times I have used tools with poor integration or confusing workflows. Whenever I experienced mismatched behavior or complex setup steps in real software, it reminded me how frustrating that can be. That connection helped me appreciate why early, careful system design is crucial: it reduces user frustration and makes future iterations smoother, which ties directly into principles of empathy and clarity we emphasize in design work.
          </>
        ),
        challenges: "Managing environment variables and ensuring smooth communication between the backend and React frontend required careful debugging. Tailwind configuration needed some fixes before styling worked correctly. Another challenge was limiting UI complexity to stay within the week’s time budget, which required intentional simplification and prioritization.",
        aiTool: "I used ChatGPT and OpenAI tools to test API integration and brainstorm initial chatbot prompt templates. Figma AI assisted with UI mockups for the chat and stepper interfaces. Notion AI helped me organize development notes, track tasks, and synthesize debugging insights efficiently."
      }
    },
    
    {
      week: 11,
      data: {
        learning: "Sprint 1 focused on building the core AI system and foundational workflow templates. I learned that a stable end-to-end pipeline — from React UI to Express backend to OpenAI responses — allows for faster iteration and testing. Implementing structured workflow templates taught me how to balance flexibility with guided AI responses, and the separation between templates, prompts, and UI logic clarified system modularity. I also realized that early attention to backend/frontend stability pays off when adding complex features later.",
        connection: (
          <>
            Working on chatbot workflows reminded me of navigating bureaucratic processes like school forms or housing requests. Seeing the AI handle structured steps made me reflect on how thoughtful design can reduce stress and confusion for users, emphasizing the real-world impact of careful system planning.
          </>
        ),
        challenges: "Designing prompts that were flexible yet structured took multiple iterations. The stepper UI needed restructuring to avoid unnecessary complexity, and deciding which tasks belong in templates versus AI reasoning required careful thought. Maintaining stability in the end-to-end pipeline while iterating on both backend and UI was also a consistent challenge.",
        aiTool: "I relied on ChatGPT for testing prompt designs and generating workflow templates, which helped refine AI responses efficiently. Figma AI assisted with UI adjustments for the chat interface and stepper. Notion AI helped organize template logic, document API issues, and prioritize feature development for the next sprint."
      }
    },
  
    {
      week: 12,
      data: {
        learning: "Sprint 2 focused on improving reliability and clarity by adding form explanations and an offline FAQ fallback system. I learned how challenging it is to take complex, bureaucratic language and convert it into simple, accessible explanations for students. Refining the natural-language explanation prompts taught me how to constrain AI outputs effectively. Building the offline FAQ system also showed me the importance of anticipating failures—timeouts, rate limits, and missing API keys—and designing the app so it remains useful even without AI access.",
        connection: (
          <>
            Working on form explanation and FAQs reminded me of how confusing university paperwork can be. Building these features made me think about how many students feel lost when reading official forms or navigating holds and deadlines. The process reinforced why a tool like Bureaucracy Buddy matters: thoughtful design and clear communication genuinely reduce user stress and uncertainty.
          </>
        ),
        challenges: "Prompt design for form explanations was harder than expected; early drafts were too formal or technical, and simplifying them took multiple revisions. Implementing a reliable API failure detector required handling more edge cases than I anticipated, especially around timeouts and rate limit errors. Writing concise, helpful FAQ entries also proved challenging—it took several rewrites to make the information clear for non-experts.",
        aiTool: "I used ChatGPT extensively to refine prompt patterns for form explanations and to rewrite FAQ entries in clearer language. Figma AI helped adjust the FAQ UI and navigation flow. Notion AI supported organizing offline fallback logic, documenting error cases, and planning features for Sprint 3 such as local workflow saving and optional Firebase Auth."
      }
    },
    {
      "week": 13,
      "data": {
        "learning": "This week focused on finalizing AI integration for form explanations and FAQs in Bureaucracy Buddy. I learned how to make AI-generated content reliable and student-friendly, especially under edge cases like API failures or unclear prompts. Testing with a real student helped identify confusing wording and navigation issues, which I then refined. I also explored fallback strategies for offline use, ensuring the app remains helpful even when AI responses are slow or unavailable.",
        "connection": (
          <>
            Working with real users reinforced how overwhelming bureaucratic processes can be for students. Simplifying form instructions and providing a clear FAQ flow made me realize the value of AI as a bridge between complex university systems and everyday student understanding. Seeing users successfully complete tasks without frustration highlighted the impact thoughtful UX and AI guidance can have on reducing stress.
          </>
        ),
        "challenges": "Ensuring AI explanations were consistently clear and concise was difficult. Early prompts produced overly technical responses, requiring multiple revisions. Handling offline fallback logic and rate-limiting errors added complexity. Additionally, designing the FAQ system to anticipate students’ common questions took several iterations of testing and refinement.",
        "aiTool": "I used ChatGPT extensively for rewriting form instructions in simple language and generating FAQ content. Figma AI helped improve the FAQ interface and workflow clarity. Notion AI was used for planning offline fallback features, documenting edge cases, and organizing prompts for consistent AI output."
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
