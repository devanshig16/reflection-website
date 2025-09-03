"use client";
import { useRouter } from "next/navigation";

export default function AboutMe() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen px-5 font-mono bg-[#d9d7d4] relative">
      {/* Heading absolutely positioned so layout is unaffected */}
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-black">
        Hi, I&apos;m Devanshi!
      </h1>

      <button
        onClick={() => router.push("/hub")}
        className="absolute top-4 right-4 px-6 py-3 bg-[#ffce00] text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
        Home
      </button>

      {/* Video on left with margin top to move down */}
      <div className="w-80 flex-shrink-0 mr-6 mt-60">
        <video
          src="/aboutme.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
