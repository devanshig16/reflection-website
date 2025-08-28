"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutMe() {
  const router = useRouter();

  useEffect(() => {
    // This will make sure the page has the gradient animation
    document.body.classList.add("about-me-bg");
    return () => document.body.classList.remove("about-me-bg");
  }, []);

  return (
    <div className="font-mono min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center text-white z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl mb-8 text-[#ffce00]">
          Hey, I&apos;m Devanshi!
        </h1>
        <p className="text-lg md:text-xl text-white opacity-80 mb-8">
          I&apos;ll make this page at some point super soon!{" "}
          <span className="text-[#ffce00]">Stay tuned!</span>
        </p>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-[#ffce00] text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Home
        </button>
      </div>
    </div>
  );
}
